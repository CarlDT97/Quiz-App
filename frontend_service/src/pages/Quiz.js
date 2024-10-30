import React, { useEffect, useState } from "react";
import "../style/quiz.css";

function Quiz() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch("http://localhost:5003/api/quizzes");
        if (!response.ok) {
          throw new Error("Failed to fetch quizzes");
        }
        const data = await response.json();
        setQuizzes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, []);

  if (loading) return <h2>Loading quizzes...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  // Group quizzes by date
  const quizzesByDate = {};
  quizzes.forEach((quiz) => {
    const quizDate = new Date(quiz.dateTime).toLocaleDateString();
    if (!quizzesByDate[quizDate]) {
      quizzesByDate[quizDate] = [];
    }
    quizzesByDate[quizDate].push(quiz);
  });

  return (
    <div className="quiz-container">
      <h2 className="quiz-title">Home Page</h2>
      <h3>Available Quizzes:</h3>
      {Object.keys(quizzesByDate).map((date) => (
        <div key={date}>
          <h3>{date}</h3>
          <ul className="quiz-list">
            {quizzesByDate[date].map((quiz) => (
              <div className="quiz-item" key={quiz._id}>
                <li>
                  <h4 className="quiz-header">{quiz.title}</h4>
                  <p className="quiz-details">Address: {quiz.address}</p>
                  <p className="quiz-details">Host: {quiz.host.join(", ")}</p>
                  <p className="quiz-details">
                    Date & Time: {new Date(quiz.dateTime).toLocaleString()}
                  </p>
                  <p className="quiz-details">Duration: {quiz.duration}</p>
                  <p className="quiz-details">Theme: {quiz.theme}</p>
                </li>
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Quiz;
