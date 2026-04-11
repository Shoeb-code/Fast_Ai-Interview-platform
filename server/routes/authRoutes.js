const express = require("express");
const router = express.Router();

const {
  getProfile,
  register,
  login,
  forgotPassword,
  verifyOtp,
  resetPassword,
} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/profile", protect, getProfile);

router.post("/forgot-password",forgotPassword);

router.post("/verify-otp", verifyOtp);

router.post("/reset-password",resetPassword);

module.exports = router;