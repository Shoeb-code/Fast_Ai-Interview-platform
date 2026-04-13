const Interview = require("../models/Interview");
const User = require("../models/User");

const {
  generateQuestions,
  generateFinalFeedback,
} = require("../services/groqInterviewService");

/*
|--------------------------------------------------------------------------
| Start Interview
|--------------------------------------------------------------------------
*/
const startInterview = async (
  req,
  res
) => {
  try {
    const { role, level } =
      req.body;

    const rawQuestions =
      await generateQuestions(
        role,
        level
      );

    

    /*
    IMPORTANT FIX
    Convert string[] -> object[]
    */
    const formattedQuestions =
      rawQuestions.map(
        (q) => ({
          question: q,
          category:
            "technical",
        })
      );

   

    const interview =
      await Interview.create({
        userId: req.user._id,
        role,
        level,
        questions:
          formattedQuestions,
        status: "started",
        questionCount:
          formattedQuestions.length,
      });

    return res.status(201).json({
      success: true,
      interview,
    });
  } catch (error) {
    console.error(
      "START INTERVIEW ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        error.message,
    });
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
        userId: req.user._id,
      });

    if (!interview) {
      return res.status(404).json({
        success: false,
        message:
          "Interview not found",
      });
    }

    interview.answers.push({
      question,
      answer,
    });

    await interview.save();

    return res.status(200).json({
      success: true,
      message:
        "Answer saved",
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
      duration = 0,
    } = req.body;

    const interview =
      await Interview.findOne({
        _id: interviewId,
        userId: req.user._id,
      });

    if (!interview) {
      return res.status(404).json({
        success: false,
        message:
          "Interview not found",
      });
    }

    if (
      interview.status ===
      "completed"
    ) {
      // Even if already completed,
      // resync user stats to avoid mismatch
      const totalInterviews =
        await Interview.countDocuments({
          userId: req.user._id,
          status: "completed",
        });

      const bestInterview =
        await Interview.findOne({
          userId: req.user._id,
          status: "completed",
        })
          .sort({
            totalScore: -1,
          })
          .select("totalScore");

      await User.findByIdAndUpdate(
        req.user._id,
        {
          totalInterviews,
          bestScore:
            bestInterview
              ?.totalScore || 0,
        }
      );

      return res.status(400).json({
        success: false,
        message:
          "Already completed",
      });
    }

    const aiResult =
      await generateFinalFeedback(
        interview.answers,
        interview.role
      );

    interview.totalScore =
      Number(
        aiResult.totalScore || 0
      );

    interview.overallFeedback =
      aiResult.feedback ||
      "";

    interview.status =
      "completed";

    interview.duration =
      duration;

    interview.completedAt =
      new Date();

    await interview.save();

    // Recalculate user stats from Interview collection
    const totalInterviews =
      await Interview.countDocuments({
        userId: req.user._id,
        status: "completed",
      });

    const bestInterview =
      await Interview.findOne({
        userId: req.user._id,
        status: "completed",
      })
        .sort({
          totalScore: 1,
        })
        .select("totalScore");

    await User.findByIdAndUpdate(
      req.user._id,
      {
        totalInterviews,
        bestScore:
          bestInterview
            ?.totalScore || 0,
      }
    );

    return res.status(200).json({
      success: true,
      interview,
    });
  } catch (error) {
    next(error);
  }
};

const getInterviewHistory =
  async (
    req,
    res,
    next
  ) => {
    try {
      const interviews =
        await Interview.find({
          userId:
            req.user._id,
        }).sort({
          createdAt: -1,
        });

      return res.status(200).json({
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