const express = require("express");
const router = express.Router();

const {
  getProfile,
  register,
  login,
  forgotPassword,
  verifyOtp,
  resetPassword,
  sendRegisterOtp,
  verifyRegisterOtp,
} = require("./auth.controller");

const { protect } = require("../../shared/middleware/auth.middleware");

router.post("/register", register);
router.post("/login", login);
router.get("/profile", protect, getProfile);

router.post("/send-register-otp", sendRegisterOtp);
router.post("/verify-register-otp", verifyRegisterOtp);

router.post("/forgot-password", forgotPassword);
router.post("/verify-otp", verifyOtp);
router.post("/reset-password", resetPassword);

module.exports = router;
