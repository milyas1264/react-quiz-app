// App.js
import React, { useState } from "react";
import "./App.css";

const questions = [
  {
    questionText: "React kis company ne develop kiya?",
    answerOptions: [
      { answerText: "Google", isCorrect: false },
      { answerText: "Facebook", isCorrect: true },
      { answerText: "Microsoft", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
    ],
  },
  {
    questionText: "React me state manage karne ke liye kya use hota hai?",
    answerOptions: [
      { answerText: "useState Hook", isCorrect: true },
      { answerText: "setInterval", isCorrect: false },
      { answerText: "localStorage", isCorrect: false },
      { answerText: "window.alert", isCorrect: false },
    ],
  },
  {
    questionText: "React apps ko style karne ke liye commonly kya use hota hai?",
    answerOptions: [
      { answerText: "CSS", isCorrect: true },
      { answerText: "Python", isCorrect: false },
      { answerText: "SQL", isCorrect: false },
      { answerText: "C++", isCorrect: false },
    ],
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          Tumhara score hai {score} out of {questions.length}
          <br />
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option.isCorrect)}
              >
                {option.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
