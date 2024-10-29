const express = require("express");
const cors = require("cors"); // Import CORS
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5002;
const jwtSecret = process.env.JWT_SECRET;

// Use CORS middleware
app.use(
  cors({
    origin: "http://localhost:5003", // Allow requests from the API Gateway
    methods: "GET,POST,PUT,DELETE", // Allow these HTTP methods
    allowedHeaders: ["Content-Type"], // Allow these headers
  })
);

app.use(express.json());
connectDB(); // Connect to MongoDB

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`User Service is running on http://localhost:${PORT}`);
});
