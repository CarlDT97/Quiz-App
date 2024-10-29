const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    // Use MONGO_URI environment variable for the connection string
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit process on failure
  }
};

module.exports = connectDB;
