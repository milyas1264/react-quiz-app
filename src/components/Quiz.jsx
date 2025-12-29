import { useState } from "react";
import questions from "../data/questions";

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleClick = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz">
      {showResult ? (
        <h2>Score: {score} / {questions.length}</h2>
      ) : (
        <>
          <h2>{questions[current].question}</h2>
          {questions[current].options.map((opt, i) => (
            <button key={i} onClick={() => handleClick(opt)}>
              {opt}
            </button>
          ))}
        </>
      )}
    </div>
  );
}

export default Quiz;
