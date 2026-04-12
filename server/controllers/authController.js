const Otp = require("../models/Otp.js");
const User = require("../models/User.js");
const generateToken = require("../utils/generateToken.js");
const sendOtpEmail = require("../utils/sendOtpEmail.js");


// Register
const register = async (req, res, next) => {
  try {
    console.log(req.body);

    const { fullName, email, password } =
      req.body;

    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = await User.create({
      fullName,
      email,
      password,
    });

    const token = generateToken(user._id);

    return res.status(201).json({
      success: true,
      token,
      user,
    });
  } catch (error) {
    console.log("REGISTER ERROR:", error)
    console.log("NEXT:", next)
    next(error)
 }
};

const sendRegisterOtp = async (
  req,
  res,
  next
) => {
  try {
    const { email } = req.body;

    const normalizedEmail =
      email.trim().toLowerCase();

    const existingUser =
      await User.findOne({
        email: normalizedEmail,
      });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message:
          "User already exists",
      });
    }

    const otp = Math.floor(
      100000 +
        Math.random() * 900000
    ).toString();

    await Otp.findOneAndDelete({
      email: normalizedEmail,
      purpose: "register",
    });

    await Otp.create({
      email: normalizedEmail,
      otp,
      purpose: "register",
      expiresAt: new Date(
        Date.now() +
          5 * 60 * 1000
      ),
    });

    await sendOtpEmail(
      normalizedEmail,
      otp
    );

    return res.status(200).json({
      success: true,
      message:
        "OTP sent successfully",
    });
  } catch (error) {
    next(error);
  }
};

const verifyRegisterOtp =
  async (
    req,
    res,
    next
  ) => {
    try {
      const {
        fullName,
        email,
        password,
        otp,
      } = req.body;

      const normalizedEmail =
        email
          .trim()
          .toLowerCase();

      const otpDoc =
        await Otp.findOne({
          email:
            normalizedEmail,
          otp:
            otp.toString(),
          purpose:
            "register",
        });

      if (!otpDoc) {
        return res.status(400).json({
          success: false,
          message:
            "Invalid OTP",
        });
      }

      if (
        otpDoc.expiresAt <
        new Date()
      ) {
        return res.status(400).json({
          success: false,
          message:
            "OTP expired",
        });
      }

      const user =
        await User.create({
          fullName,
          email:
            normalizedEmail,
          password,
        });

      await Otp.deleteOne({
        _id: otpDoc._id,
      });

      const token =
        generateToken(
          user._id
        );

      return res.status(201).json({
        success: true,
        token,
        user,
      });
    } catch (error) {
      next(error);
    }
  };

// login
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email,
    }).select("+password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch =
      await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = generateToken(user._id);

    return res.status(200).json({
      success: true,
      token,
      user,
    });
  } catch (error) {
    next(error);
  }
};



// getProfile
const getProfile = async (
  req,
  res,
  next
) => {
  try {
    const user =
      await User.findById(
        req.user.id
      ).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message:
          "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProfile,
};

const forgotPassword = async (
  req,
  res,
  next
) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const normalizedEmail =
      email.trim().toLowerCase();

    const user = await User.findOne({
      email: normalizedEmail,
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    await Otp.findOneAndDelete({
      email: normalizedEmail,
    });

    await Otp.create({
      email: normalizedEmail,
      otp,
      expiresAt: new Date(
        Date.now() + 5 * 60 * 1000
      ),
    });

    await sendOtpEmail(
      normalizedEmail,
      otp
    );

    return res.status(200).json({
      success: true,
      message:
        "OTP sent successfully",
    });
  } catch (error) {
    console.error(
      "FORGOT PASSWORD ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const verifyOtp = async (
  req,
  res,
  next
) => {
  try {
    const { email, otp } = req.body;

    const otpDoc = await Otp.findOne({
      email: email.trim().toLowerCase(),
      otp: otp.toString(),
    });

    if (!otpDoc) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    if (
      otpDoc.expiresAt <
      new Date()
    ) {
      return res.status(400).json({
        success: false,
        message: "OTP expired",
      });
    }

    return res.status(200).json({
      success: true,
      message: "OTP verified",
    });
  } catch (error) {
    next(error);
  }
};

const resetPassword = async (
  req,
  res,
  next
) => {
  try {
    const {
      email,
      otp,
      password,
    } = req.body;

    const normalizedEmail =
      email.trim().toLowerCase();

    const otpDoc = await Otp.findOne({
      email: normalizedEmail,
      otp: otp.toString(),
    });

    if (!otpDoc) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    if (
      otpDoc.expiresAt <
      new Date()
    ) {
      return res.status(400).json({
        success: false,
        message: "OTP expired",
      });
    }

    const user = await User.findOne({
      email: normalizedEmail,
    }).select("+password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.password = password;

    await user.save();

    await Otp.deleteOne({
      email: normalizedEmail,
    });

    return res.status(200).json({
      success: true,
      message:
        "Password reset successful",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  getProfile,

  forgotPassword,
  verifyOtp,
  resetPassword,

  sendRegisterOtp,
  verifyRegisterOtp,
};;
