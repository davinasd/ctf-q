import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Login({
  username,
  password,
  isLoggedIn,
  setIsLoggedIn,
  setUsername,
  setPassword,
}) {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = () => {
    if (usernameInput === "' OR 1=1 --") {
      setIsLoggedIn(true);
      setUsername(usernameInput);
      setPassword(passwordInput);
      navigate("/user"); // Navigate to /home on successful login
    } else {
      setIsLoggedIn(false);
      setUsername(usernameInput);
      setPassword(passwordInput);
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium">
            Username
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-400"
            placeholder="Enter your username"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-400"
            placeholder="Enter your password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white rounded-md py-2 px-4 hover-bg-blue-600 focus:outline-none"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
