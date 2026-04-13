const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const healthRoutes = require("./routes/healthRoutes");
const interviewRoutes = require("./routes/interviewRoutes");
const userRouter=require('./routes/userRoutes')


const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

// Global middlewares
app.use(
  cors({
    origin: ["http://localhost:5173","https://your-app.vercel.app"],
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// health checkup Routes
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "AI Mock Interview API is running",
  });
});

// Api Routes
app.use("/api/health", healthRoutes);
app.use("/api/interview", interviewRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users",userRouter );

// Error handling 
app.use(notFound);
app.use(errorHandler);




module.exports = app;
