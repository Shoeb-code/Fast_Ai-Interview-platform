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
} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/profile", protect, getProfile);

router.post("/send-register-otp",sendRegisterOtp);
router.post("/verify-register-otp",verifyRegisterOtp);

router.post("/forgot-password",forgotPassword);

router.post("/verify-otp", verifyOtp);
router.post("/reset-password",resetPassword);

module.exports = router;