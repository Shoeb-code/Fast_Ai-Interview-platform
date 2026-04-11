const express = require("express");
const router = express.Router();

const {
  startInterview,
  submitAnswer,
  finishInterview,
  getInterviewHistory,
} = require("../controllers/interviewController");

const { protect } = require("../middleware/authMiddleware");

router.post("/start", protect, startInterview);
router.post("/submit-answer", protect, submitAnswer);
router.post("/finish", protect, finishInterview);
router.get("/history", protect, getInterviewHistory);

module.exports = router;