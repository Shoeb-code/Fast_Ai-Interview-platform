const mongoose = require("mongoose");
const dns = require("dns");

// Configure Node.js to use Google & Cloudflare DNS to reliably resolve MongoDB Atlas SRV records
try {
  dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);
} catch (e) {
  console.warn("Could not set custom DNS servers:", e.message);
}

const connectDB = async (retries = 5, delay = 3000) => {
  let mongoUri = process.env.MONGO_URI ? process.env.MONGO_URI.trim() : "";

  if (!mongoUri) {
    console.error("❌ MONGO_URI is missing in .env");
    return;
  }

  // Auto-strip accidental angle brackets from <username> or <password> copied from Atlas
  if (mongoUri.includes("<") || mongoUri.includes(">")) {
    mongoUri = mongoUri.replace(/<([^>]+)>/g, "$1");
  }

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const conn = await mongoose.connect(mongoUri, {
        serverSelectionTimeoutMS: 5000,
      });

      console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
      return conn;
    } catch (error) {
      console.error(
        `❌ DB Error (Attempt ${attempt}/${retries}): ${error.message}`
      );

      if (attempt < retries) {
        console.log(`🔄 Retrying DB connection in ${delay / 1000}s...`);
        await new Promise((res) => setTimeout(res, delay));
      } else {
        console.error("❌ All MongoDB connection attempts failed.");
      }
    }
  }
};

module.exports = connectDB;
