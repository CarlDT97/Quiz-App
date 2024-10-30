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
    type: [String], 
    required: true,
  },
  dateTime: {
    type: Date, 
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    required: true,
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
