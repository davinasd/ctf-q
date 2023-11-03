import React, { useEffect } from "react";
import { useCookies } from "react-cookie";

function Home({ username, password }) {
  const [cookies, setCookie, removeCookie] = useCookies(["information"]);

  
  useEffect(() => {
    setCookie("information", "informationfnflkdsmfkfmkdmvkdetail");
  }, []); 

  console.log(
    `SELECT * FROM users WHERE name = '${username}' AND password = '${password}'`
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">SQLITE Login Failed</h1>
        <div className="mb-4">
          <p className="text-red-600">Username: {username}</p>
        </div>
        <div className="mb-4">
          <p className="text-red-600">Password: {password}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
