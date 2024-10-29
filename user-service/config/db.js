const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    // Determine the appropriate MongoDB URI based on the environment
    const dbURI =
      process.env.NODE_ENV === "k8s"
        ? process.env.MONGO_URI_K8S  // MongoDB URI for Kubernetes
        : process.env.MONGO_URI;      // Local MongoDB URI

    await mongoose.connect(dbURI, {
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
