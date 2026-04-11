const express = require("express");
const {
    updateProfile,
    getProfile,
} = require("../controllers/userController");
const {protect} =require('../middleware/authMiddleware')

const router = express.Router();



router.get("/get-profile",protect,getProfile);

router.put("/edit-profile",protect,updateProfile);

module.exports = router;