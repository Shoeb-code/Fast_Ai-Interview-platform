const nodemailer = require("nodemailer");

const createTransporter = () => {
  // Option 1: Gmail SMTP (if provided)
  if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASS) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });
  }

  // Option 2: Brevo SMTP
  return nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.BREVO_LOGIN,
      pass: process.env.BREVO_SMTP_KEY,
    },
  });
};

const sendOtpEmail = async (email, otp) => {
  // Always log OTP to server console for easy testing & development
  console.log("\n========================================");
  console.log(`📧 [OTP SENT] Target Email: ${email}`);
  console.log(`🔑 Verification Code: ${otp}`);
  console.log("========================================\n");

  try {
    const transporter = createTransporter();
    await transporter.sendMail({
      from: `"AI Mock Interview" <${process.env.BREVO_SENDER || "noreply@aimockinterview.com"}>`,
      to: email,
      subject: "Verification OTP - AI Mock Interview",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 500px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #4f46e5;">AI Mock Interview Platform</h2>
          <p>Your verification code is:</p>
          <div style="background: #f1f5f9; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <h1 style="letter-spacing: 8px; margin: 0; color: #0f172a;">${otp}</h1>
          </div>
          <p style="color: #64748b; font-size: 13px;">This OTP will expire in 5 minutes. If you did not request this, please ignore this email.</p>
        </div>
      `,
    });
    console.log(`✅ Email sent successfully to ${email}`);
  } catch (error) {
    console.warn(`⚠️ SMTP delivery failed (${error.message}).`);
    console.warn(`💡 Use the console OTP above to continue.`);

    if (process.env.NODE_ENV === "production" && process.env.STRICT_EMAIL === "true") {
      throw error;
    }
  }
};

module.exports = { sendOtpEmail };
