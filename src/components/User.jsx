import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CppCode1 = `
#include <iostream>
using namespace std;

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int* ptr = arr;

    cout << *(ptr + 3) << " " << ptr[3] << " " << 3[arr] << " " << *(3 + ptr);

    return 0;
}
`;

const CppCode2 = `
// Another code snippet here
`;

const User = () => {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [showInput2, setShowInput2] = useState(false);

  const checkAnswer1 = () => {
    if (answer1 === "4 4 4 4") {
      setShowInput2(true);
      console.log("")
    }
  };

  const checkAnswer2 = () => {
    // You can add logic to check the answer for the second question here
    if (answer2 === "desired_answer_2") {
      // Handle the correct answer for the second question
    }
  };

  return (
    <div>
      <div className="p-4 bg-green-200 text-green-800 rounded shadow">
        Successfully Logged In - View Sources
      </div>

      <p hidden>
        <SyntaxHighlighter language="cpp" style={dark}>
          {CppCode1}
        </SyntaxHighlighter>
      </p>

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
          placeholder="Enter the output"
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
              placeholder="Enter the answer for question 2"
            />
            <button onClick={checkAnswer2}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
