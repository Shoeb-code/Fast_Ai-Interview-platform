const User = require("../models/User");

exports.updateProfile = async (
  req,
  res
) => {
  try {
    const userId = req.user.id;

    const updatedUser =
      await User.findByIdAndUpdate(
        userId,
        {
          fullName: req.body.fullName,
          currentRole:
            req.body.currentRole,
          experience:
            req.body.experience,
          course: req.body.course,
          dreamCompany:
            req.body.dreamCompany,
          skills: req.body.skills,
          bio: req.body.bio,
          phone: req.body.phone,
          location:
            req.body.location,
          website:
            req.body.website,
          objective:
            req.body.objective,
          linkedin:
            req.body.linkedin,
          github:
            req.body.github,
          leetcode:
            req.body.leetcode,
          portfolio:
            req.body.portfolio,
          resumeUrl:
            req.body.resumeUrl,
        },
        {
          new: true,
          runValidators: true,
        }
      ).select("-password");

    return res.status(200).json({
      success: true,
      message:
        "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error(
      "Update Profile Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to update profile",
    });
  }
};


exports.getProfile = async (
    req,
    res
  ) => {
    try {
      const user = await User.findById(
        req.user.id
      ).select("-password");
  
      return res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          "Failed to fetch profile",
      });
    }
  };