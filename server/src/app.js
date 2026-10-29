const express = require("express");
const cors = require("cors");

const authRoutes = require("./modules/auth/auth.routes");
const userRoutes = require("./modules/user/user.routes");
const interviewRoutes = require("./modules/interview/interview.routes");
const healthRoutes = require("./modules/health/health.routes");

const {
  notFound,
  errorHandler,
} = require("./shared/middleware/error.middleware");

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:3000",
  "https://fast-ai-interview-platform.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (e.g. Postman, mobile apps, curl)
      if (!origin) return callback(null, true);

      // Allow known local + production domains
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // Allow all Vercel preview deployments
      if (origin.endsWith(".vercel.app")) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Root health check route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "AI Mock Interview API is running",
  });
});

// Modular API Routes (Standard /api prefix)
app.use("/api/health", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/interview", interviewRoutes);

// Root Aliases (Ensures backward compatibility for clients calling /auth, /users, etc. without /api)
app.use("/health", healthRoutes);
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/interview", interviewRoutes);

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

module.exports = app;
