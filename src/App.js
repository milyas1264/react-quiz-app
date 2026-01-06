/* eslint-disable */

import { useState, useEffect } from "react";
import "./App.css";


function App() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "HTML ka full form kya hai?",
      options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Markup Language"],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "React kis company ne banaya?",
      options: ["Google", "Facebook", "Microsoft"],
      answer: "Facebook"
    },
    {
      question: "JavaScript kis type ki language hai?",
      options: ["Programming", "Markup", "Styling"],
      answer: "Programming"
    },
    {
      question: "CSS ka full form kya hai?",
      options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
      answer: "Cascading Style Sheets"
    },
    {
      question: "DOM ka full form kya hai?",
      options: ["Document Object Model", "Data Object Model", "Desktop Object Model"],
      answer: "Document Object Model"
    }
  ];

  const handleClick = (option) => {
    if (option === questions[index].answer) {
      setScore(score + 1);
    }

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="app">
      <h1>Quiz App</h1>

      {showResult ? (
        <h2>Score: {score} / {questions.length}</h2>
      ) : (
        <>
          <h3>{questions[index].question}</h3>

          {questions[index].options.map((opt, i) => (
            <button key={i} onClick={() => handleClick(opt)}>
              {opt}
            </button>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
