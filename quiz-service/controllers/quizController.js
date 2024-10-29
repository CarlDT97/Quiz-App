const Quiz = require("../models/quiz");

// Get all quizzes
const getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving quizzes", error: error.message });
  }
};

// Get a quiz by ID
const getQuizzesById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id); // Use req.params.id to find by ID
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    res.json(quiz);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving quiz", error: error.message });
  }
};

// Create a new quiz
const createQuiz = async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating quiz", error: error.message });
  }
};

module.exports = { getQuizzes, getQuizzesById, createQuiz };
