const express = require("express");
const {
  getQuizzes,
  createQuiz,
  getQuizzesById,
} = require("../controllers/quizController");

const router = express.Router();

router.get("/", getQuizzes);
router.get("/:id", getQuizzesById);
router.post("/", createQuiz);

module.exports = router;
