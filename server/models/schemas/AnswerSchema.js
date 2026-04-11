const mongoose = require("mongoose");

const answerSchema =
  new mongoose.Schema(
    {
      question: {
        type: String,
        required: true,
        trim: true,
      },

      answer: {
        type: String,
        default: "",
        trim: true,
      },

      score: {
        type: Number,
        default: 0,
        min: 0,
        max: 10,
      },

      feedback: {
        type: String,
        default: "",
        trim: true,
      },

      category: {
        type: String,
        default:
          "technical",
        enum: [
          "technical",
          "hr",
          "behavioral",
          "system-design",
        ],
      },
    },
    {
      _id: false,
      timestamps: true,
    }
  );

module.exports =
  answerSchema;