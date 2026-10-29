const express = require("express");
const router = express.Router();

const {
  updateProfile,
  getProfile,
} = require("./user.controller");

const { protect } = require("../../shared/middleware/auth.middleware");

router.get("/get-profile", protect, getProfile);
router.put("/edit-profile", protect, updateProfile);

module.exports = router;
