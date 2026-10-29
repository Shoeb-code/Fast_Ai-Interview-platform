const express = require("express");
const router = express.Router();

const {
  startInterview,
  submitAnswer,
  finishInterview,
  getInterviewHistory,
} = require("./interview.controller");

const { protect } = require("../../shared/middleware/auth.middleware");

router.post("/start", protect, startInterview);
router.post("/submit-answer", protect, submitAnswer);
router.post("/finish", protect, finishInterview);
router.get("/history", protect, getInterviewHistory);

module.exports = router;
