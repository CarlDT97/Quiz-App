const express = require("express");
const cors = require("cors"); // Import the cors package
const connectDB = require("./config/db");
const quizRoutes = require("./routes/quizRoutes");

const app = express();
const PORT = process.env.PORT || 5001;

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

app.use("/api/quizzes", quizRoutes);

app.listen(PORT, () => {
  console.log(`Quiz Service is running on http://localhost:${PORT}`);
});
