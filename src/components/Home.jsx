import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

function Home({ username, password }) {
  const [cookies, setCookie, removeCookie] = useCookies(["DBUSED"]);

  
  useEffect(() => {
    setCookie("DBUSED", "SQLITE");
    
  }, []); 

  console.log(
    `SELECT * FROM users WHERE name = '${username}' AND password = '${password}'`
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Login Failed</h1>
        <div className="mb-4">
          <p className="text-red-600">Username: {username}</p>
        </div>
        <div className="mb-4">
          <p className="text-red-600">Password: {password}</p>
        </div>
        <Link to="/">
          {" "}
          {/* Link to the home path */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Try Again
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
