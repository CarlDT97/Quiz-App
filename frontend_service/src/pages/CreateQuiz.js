// CreateQuiz.js
import React, { useState } from "react";
import "../style/createquiz.css";

function CreateQuiz() {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [host, setHost] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [duration, setDuration] = useState("");
  const [theme, setTheme] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const quizData = {
      title,
      address,
      host: host.split(",").map((h) => h.trim()),
      dateTime,
      duration,
      theme,
    };

    try {
      const response = await fetch("http://localhost:5003/api/quizzes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quizData),
      });

      if (!response.ok) {
        console.log(response);
        throw new Error("Failed to create quiz");
      }

      // Clear form after successful submission
      setTitle("");
      setAddress("");
      setHost("");
      setDateTime("");
      setTheme("");
      setDuration("");

      alert("Quiz created successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h2>Create a New Quiz</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name of the quiz:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Address of the quiz:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Host (comma-separated):</label>
          <input
            type="text"
            value={host}
            onChange={(e) => setHost(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date & Time:</label>
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Duration of the quiz:</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
            placeholder="exemple.., 2h" // Add the placeholder here
          />
        </div>
        <div>
          <label>Theme:</label>
          <input
            type="text"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Quiz</button>
      </form>
    </div>
  );
}

export default CreateQuiz;
