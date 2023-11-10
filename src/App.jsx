import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/Login";
import User from "./components/User";
import Home from "./components/Home"; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              isLoggedIn={isLoggedIn} 
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        {isLoggedIn ? (
          <Route path="/user" element={<User />} />
        ) : (
          <Route
            path="/"
            element={<Login />}
          />
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
