const mongoose = require("mongoose");

const answerSchema = require("./schemas/AnswerSchema");
const questionSchema = require("./schemas/QuestionSchema");

const interviewSchema =
  new mongoose.Schema(
    {
      userId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
      },

      role: {
        type: String,
        required: true,
        trim: true,
      },

      level: {
        type: String,
        enum: [
          "beginner",
          "intermediate",
          "advanced",
        ],
        default:
          "beginner",
      },

      status: {
        type: String,
        enum: [
          "started",
          "completed",
          "cancelled",
        ],
        default:
          "started",
        index: true,
      },

      questions: {
        type: [
          questionSchema,
        ],
        default: [],
      },

      answers: {
        type: [
          answerSchema,
        ],
        default: [],
      },

      totalScore: {
        type: Number,
        default: 0,
        min: 0,
        max: 10,
      },

      overallFeedback: {
        type: String,
        default: "",
      },

      duration: {
        type: Number,
        default: 0,
      },

      questionCount: {
        type: Number,
        default: 0,
      },

      completedAt: {
        type: Date,
        default: null,
      },
    },
    {
      timestamps: true,
    }
  );

interviewSchema.index({
  userId: 1,
  createdAt: -1,
});

interviewSchema.virtual(
  "averageScore"
).get(function () {
  if (
    !this.answers ||
    this.answers.length === 0
  )
    return 0;

  const total =
    this.answers.reduce(
      (sum, item) =>
        sum + item.score,
      0
    );

  return (
    total / this.answers.length
  ).toFixed(1);
});

module.exports =
  mongoose.model(
    "Interview",
    interviewSchema
  );