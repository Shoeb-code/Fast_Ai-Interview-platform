const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const healthRoutes = require("./routes/healthRoutes");
const interviewRoutes = require("./routes/interviewRoutes");
const userRouter=require('./routes/userRoutes')


const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();



const allowedOrigins = [
  "http://localhost:5173",
  "https://fast-ai-interview-platform.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (Postman/mobile apps)
      if (!origin) return callback(null, true);

      // allow localhost + production
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // allow all Vercel preview deployments
      if (origin.includes(".vercel.app")) {
        return callback(null, true);
      }

      return callback(
        new Error("Not allowed by CORS")
      );
    },
    methods: [
      "GET",
      "POST",
      "PUT",
      "DELETE",
      "OPTIONS",
    ],
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
