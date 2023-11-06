import React, { useState, useEffect } from "react";
import bcrypt from "bcryptjs";

const User = () => {
  const divStyle = {
    position: "absolute",
    top: 60,
    right: 0,
    fontSize: "3px",
    color: "white",
  };
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [showInput2, setShowInput2] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("white");

  const toggleBackgroundColor = () => {
    setBackgroundColor(backgroundColor === "white" ? "black" : "white");
  };

  const checkAnswer1 = async () => {
    try {
      if (
        await bcrypt.compare(
          answer1,
          "$2a$10$rvYvARad8jA.LYHmSEbxp.JgFYkPhAK/EEIpfiv4dRiDnSW3nM362"
        )
      ) {
        setShowInput2(true);
        console.log("c091c919ddf858b79ac4a8a3794658f0");
      }
    } catch (error) {
      console.error("Error during answer1 check:", error);
    }
  };

  const checkAnswer2 = async () => {
    try {
      if (
        await bcrypt.compare(
          answer2,
          "$2a$10$oryEGL8jTu722VOy1Lf7h.23vQG7dP1s107YmVvBr8CxFkjHwo2im"
        )
      ) {
        console.log("FLAG ===(answer entered above).append(font used for making the website for the ctf)");
      }
    } catch (error) {
      console.error("Error during answer2 check:", error);
    }
  };

  return (
    <div style={{ backgroundColor }}>
      <div
        className={`p-4 ${
          backgroundColor === "white" ? "bg-green-200" : "bg-black-200"
        } text-green-800 rounded shadow`}
      >
        Logged In
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
        }}
      >
        <input
          type="text"
          value={answer1}
          onChange={(e) => setAnswer1(e.target.value)}
          placeholder="- View Element"
        />
        <button onClick={checkAnswer1}>Submit</button>
      </div>

      {showInput2 && (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              value={answer2}
              onChange={(e) => setAnswer2(e.target.value)}
              placeholder="Enter"
            />
            <button onClick={checkAnswer2}>Submit</button>
          </div>
          <div style={divStyle}>MD5</div>

          <button onClick={toggleBackgroundColor}>!</button>
        </div>
      )}
    </div>
  );
};

export default User;
