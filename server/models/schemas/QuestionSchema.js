const mongoose = require("mongoose");

const questionSchema =
  new mongoose.Schema(
    {
      question: {
        type: String,
        required: true,
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
    }
  );

module.exports =
  questionSchema;