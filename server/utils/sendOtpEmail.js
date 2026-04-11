const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_LOGIN,
    pass: process.env.BREVO_SMTP_KEY,
  },
});

const sendOtpEmail = async (email, otp) => {
    
  await transporter.sendMail({
    from: `"AI Mock Interview" <${process.env.BREVO_SENDER}>`,
    to: email,
    subject: "Password Reset OTP",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>Password Reset OTP</h2>
        <p>Your OTP is:</p>
        <h1 style="letter-spacing: 6px;">${otp}</h1>
        <p>This OTP will expire in 5 minutes.</p>
      </div>
    `,
  });
};

module.exports = sendOtpEmail;