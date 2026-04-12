const Interview = require("../models/Interview");
const User = require("../models/User");

const {
  generateQuestions,
  evaluateAnswer,
  generateFinalFeedback,
} = require("../services/aiInterviewService");

/*
|--------------------------------------------------------------------------
| Start Interview
|--------------------------------------------------------------------------
*/
const startInterview = async (
  req,
  res,
  next
) => {
  try {
    const { role, level } =
      req.body;

    const questions =
      await generateQuestions(
        role,
        level
      );

    const interview =
      await Interview.create({
        userId: req.user._id,
        role,
        level,
        questions,
        status: "started",
        questionCount:
          questions.length,
      });

    res.status(201).json({
      success: true,
      interview,
    });
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| Submit Answer
|--------------------------------------------------------------------------
*/
const submitAnswer = async (
  req,
  res,
  next
) => {
  try {
    const {
      interviewId,
      question,
      answer,
    } = req.body;

    const interview =
      await Interview.findOne({
        _id: interviewId,
        userId:
          req.user._id,
      });

    if (!interview) {
      return res.status(404).json({
        success: false,
        message:
          "Interview not found",
      });
    }

    const aiResult =
      await evaluateAnswer(
        question,
        answer,
        interview.role
      );

    interview.answers.push({
      question,
      answer,
      score:
        aiResult.score,
      feedback:
        aiResult.feedback,
    });

    await interview.save();

    return res.status(200).json({
      success: true,
      result:
        aiResult,
      interview,
    });
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| Finish Interview
|--------------------------------------------------------------------------
*/
const finishInterview = async (
  req,
  res,
  next
) => {
  try {
    const {
      interviewId,
      duration,
    } = req.body;

    const interview =
      await Interview.findOne({
        _id: interviewId,
        userId:
          req.user._id,
      });

    if (!interview) {
      return res.status(404).json({
        success: false,
        message:
          "Interview not found",
      });
    }

    /*
    -----------------------------------
    Prevent Duplicate Completion
    -----------------------------------
    */
    if (
      interview.status ===
      "completed"
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Interview already completed",
      });
    }

    /*
    -----------------------------------
    Calculate Average Score
    -----------------------------------
    */
    const totalScore =
      interview.answers
        .length
        ? Number(
            (
              interview.answers.reduce(
                (
                  sum,
                  item
                ) =>
                  sum +
                  Number(
                    item.score
                  ),
                0
              ) /
              interview
                .answers
                .length
            ).toFixed(1)
          )
        : 0;

    /*
    -----------------------------------
    Generate Final Feedback
    -----------------------------------
    */
    const finalFeedback =
      await generateFinalFeedback(
        interview.answers,
        totalScore
      );

    /*
    -----------------------------------
    Update Interview
    -----------------------------------
    */
    interview.totalScore =
      totalScore;

    interview.status =
      "completed";

    interview.overallFeedback =
      finalFeedback;

    interview.questionCount =
      interview.questions
        ?.length || 0;

    interview.duration =
      duration || 0;

    interview.completedAt =
      new Date();

    await interview.save();

    /*
    -----------------------------------
    Update User Stats
    -----------------------------------
    */
    const user =
      await User.findById(
        req.user._id
      );

    if (user) {
      user.totalInterviews =
        (user.totalInterviews ||
          0) + 1;

      user.bestScore =
        Math.max(
          user.bestScore ||
            0,
          totalScore
        );

      await user.save();
    }

    return res.status(200).json({
      success: true,
      interview,
      user,
    });
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| History
|--------------------------------------------------------------------------
*/
const getInterviewHistory =
  async (
    req,
    res,
    next
  ) => {
    try {
      const interviews =
        await Interview.find(
          {
            userId:
              req.user._id,
          }
        ).sort({
          createdAt: -1,
        });

      res.status(200).json({
        success: true,
        interviews,
      });
    } catch (error) {
      next(error);
    }
  };

module.exports = {
  startInterview,
  submitAnswer,
  finishInterview,
  getInterviewHistory,
};