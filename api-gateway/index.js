const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5003;

// Use CORS middleware
app.use(cors({
  origin: "http://localhost:3000", // Allow requests from your frontend
  methods: "GET,POST,PUT,DELETE", // Allow these HTTP methods
  allowedHeaders: ["Content-Type"], // Allow these headers
}));

app.use(express.json());

// Proxy routes to quiz service
app.use("/api/quizzes", async (req, res) => {
  console.log("Api Gateway received data:", req.body);
  try {
    const response = await axios({
      method: req.method,
      url: `http://quiz-service:5001/api/quizzes${req.path}`,
      data: req.body,
    });
    res.status(response.status).send(response.data);
  } catch (err) {
    console.error("Error in quiz service request:", err);
    if (err.response) {
      res.status(err.response.status).send(err.response.data);
    } else {
      res.status(500).send({
        error: "An unexpected error occurred while connecting to quiz service.",
      });
    }
  }
});

// Proxy routes to user service
app.use("/api/users", async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: `http://user-service:5002/api/users${req.path}`,
      data: req.body,
    });
    res.status(response.status).send(response.data);
  } catch (err) {
    console.error("Error in user service request:", err);
    if (err.response) {
      res.status(err.response.status).send(err.response.data);
    } else {
      res.status(500).send({
        error: "An unexpected error occurred while connecting to user service.",
      });
    }
  }
});

app.listen(PORT, () => {
  console.log(`API Gateway is running on http://localhost:${PORT}`);
});
