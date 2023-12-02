import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["DBUSED"]);


  useEffect(() => {
    setCookie("DBUSED", "MYSQL");
    console.log("{thestartofanewjourney");
  }, []);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("SELECT * FROM users WHERE username = ? AND password = ?");
    try {
      const loginApiUrl =
        "http://ec2-3-111-37-149.ap-south-1.compute.amazonaws.com:3000/login";
      const loginResponse = await fetch(loginApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (loginResponse.ok) {
        setIsLoggedIn(true);
        console.log(isLoggedIn);

        navigate("/user");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleSearch = async () => {
    console.log(`SELECT * FROM users WHERE username = '${searchInput}' \n🍪`);
    try {
      const searchApiUrl = "http://3.111.37.149:3000/search";
      const searchResponse = await fetch(searchApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userInput: searchInput }),
      });

      if (searchResponse.ok) {
        const searchData = await searchResponse.json();

        console.log("Search successful:", searchData);
      } else {
        console.error("Search failed");
      }
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">👨‍⚕️💉</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Search:
          <input
            type="text"
            className="mt-1 p-2 border rounded-md w-full"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </label>
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleSearch}
      >
        ENTER HERE
      </button>
      <h1 className="text-2xl font-bold mt-8 mb-4">Login</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Username:
          <input
            type="text"
            className="mt-1 p-2 border rounded-md w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Password:
          <input
            type="password"
            className="mt-1 p-2 border rounded-md w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
