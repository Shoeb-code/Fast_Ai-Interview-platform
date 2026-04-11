const Interview = require("../models/Interview");

const {
    generateQuestions,
    evaluateAnswer,
    generateFinalFeedback,
  } = require("../services/aiInterviewService");

  // start interview
const startInterview = async (req, res, next) => {
    try {
      const { role, level } = req.body;
  
      const questions = await generateQuestions(role, level);
  
      const interview = await Interview.create({
        userId: req.user._id,
        role,
        level,
        questions,
      });
  
      res.status(201).json({
        success: true,
        interview,
      });
    } catch (error) {
      next(error);
    }
  };

// submit answer
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

    const aiResult =
      await evaluateAnswer(
        question,
        answer,
        interview.role
      );

    interview.answers.push({
      question,
      answer,
      score: aiResult.score,
      feedback:
        aiResult.feedback,
    });

    await interview.save();

    return res.status(200).json({
      success: true,
      result: aiResult,
      interview,
    });
  } catch (error) {
    next(error);
  }
};

// finish interview
const finishInterview = async (
  req,
  res,
  next
) => {
  try {
    const { interviewId } =
      req.body;

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

    const totalScore =
      interview.answers.length
        ? (
            interview.answers.reduce(
              (sum, item) =>
                sum +
                item.score,
              0
            ) /
            interview.answers.length
          ).toFixed(1)
        : 0;

    const finalFeedback =
      await generateFinalFeedback(
        interview.answers,
        totalScore
      );

    interview.totalScore =
      totalScore;
    interview.status =
      "completed";
    interview.overallFeedback =
      finalFeedback;

    await interview.save();

    return res.status(200).json({
      success: true,
      interview,
    });
  } catch (error) {
    next(error);
  }
};


const getInterviewHistory = async (req, res, next) => {
  try {
    const interviews = await Interview.find({
      userId: req.user._id,
    }).sort({ createdAt: -1 });

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