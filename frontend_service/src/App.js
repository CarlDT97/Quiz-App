import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import CreateQuiz from "./pages/CreateQuiz";
import Login from "./pages/Login";

function App() {
  const isAuthenticated = () => {
    return localStorage.getItem("token") !== null;
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quiz">Quiz</Link>
          </li>
          <li>
            {isAuthenticated() ? (
              <Link to="/createQuiz">Create Quiz</Link>
            ) : (
              <span>Create Quiz (Login required)</span>
            )}
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route
          path="/createQuiz"
          element={
            isAuthenticated() ? <CreateQuiz /> : <Navigate to="/login" />
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
