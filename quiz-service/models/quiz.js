const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  host: {
    type: [String], // Array of strings for multiple hosts
    required: true,
  },
  dateTime: {
    type: Date, // Store the full date and time
    required: true,
  },
  duration: {
    type: String, // Assuming you want to store duration as a string, e.g., "2 hours"
    required: true,
  },
  theme: {
    type: String,
    required: true,
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
