import React, { useState, useEffect } from "react";
import "../style/login.css"; // Import the CSS file

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // State for registration
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerError, setRegisterError] = useState(null);
  const [registerSuccess, setRegisterSuccess] = useState(null);

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Set to true if token exists
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://localhost:5003/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message);
      }

      const { token } = await response.json();
      // Store the token in localStorage
      localStorage.setItem("token", token);
      alert("Login successful!");
      setIsLoggedIn(true); // Update login status
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    alert("Logout successful!");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setRegisterError(null);
    setRegisterSuccess(null);

    try {
      const response = await fetch("http://localhost:5003/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: registerUsername,
          password: registerPassword,
        }),
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message);
      }

      setRegisterSuccess("Account created successfully! You can now log in.");
      setRegisterUsername("");
      setRegisterPassword("");
    } catch (err) {
      setRegisterError(err.message);
    }
  };

  return (
    <div className="login-container">
      <h2>{isLoggedIn ? "Welcome Back!" : "Login"}</h2>
      {error && <p className="error">{error}</p>}

      {isLoggedIn ? (
        <div>
          <p>You are logged in.</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
          <h3>Create an Account</h3>
          {registerError && <p className="error">{registerError}</p>}
          {registerSuccess && <p className="success">{registerSuccess}</p>}
          <form onSubmit={handleRegister}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={registerUsername}
                onChange={(e) => setRegisterUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Create Account</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Login;
