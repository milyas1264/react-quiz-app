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
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Tool Markup Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "React kis company ne banaya?",
      options: ["Google", "Facebook", "Microsoft"],
      answer: "Facebook",
    },
    {
      question: "JavaScript kis type ki language hai?",
      options: ["Programming", "Markup", "Styling"],
      answer: "Programming",
    },
    {
      question: "CSS ka full form kya hai?",
      options: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "DOM ka full form kya hai?",
      options: [
        "Document Object Model",
        "Data Object Model",
        "Desktop Object Model",
      ],
      answer: "Document Object Model",
    },
    {
      question: "HTML mein link banane ke liye kaunsa tag use hota hai?",
      options: ["<a>", "<link>", "<href>"],
      answer: "<a>",
    },
    {
      question: "HTML mein sabse bada heading tag kaunsa hai?",
      options: ["<h1>", "<h6>", "<head>"],
      answer: "<h1>",
    },
    {
      question: "Image dikhane ke liye kaunsa HTML tag use hota hai?",
      options: ["<img>", "<image>", "<picture-src>"],
      answer: "<img>",
    },
    {
      question: "HTML mein paragraph ke liye kaunsa tag hai?",
      options: ["<p>", "<para>", "<text>"],
      answer: "<p>",
    },
    {
      question: "CSS mein text ka rang badalne ke liye kaunsi property hai?",
      options: ["color", "font-style", "background"],
      answer: "color",
    },
    {
      question: "CSS mein background ka rang badalne ki property kaunsi hai?",
      options: ["background-color", "text-color", "color-fill"],
      answer: "background-color",
    },
    {
      question: "CSS mein element ke bahar ki spacing ko kya kehte hain?",
      options: ["margin", "padding", "border"],
      answer: "margin",
    },
    {
      question: "CSS mein element ke andar ki spacing ko kya kehte hain?",
      options: ["padding", "margin", "outline"],
      answer: "padding",
    },
    {
      question: "JavaScript mein variable declare karne ka keyword kaunsa hai?",
      options: ["let", "style", "paint"],
      answer: "let",
    },
    {
      question: "JavaScript mein strict equality check ke liye kya use hota hai?",
      options: ["===", "=", "!==="],
      answer: "===",
    },
    {
      question: "JavaScript mein array banane ke liye kaunse brackets use hote hain?",
      options: ["[]", "{}", "()"],
      answer: "[]",
    },
    {
      question: "JavaScript mein function se value wapas bhejne ke liye kya use hota hai?",
      options: ["return", "send", "back"],
      answer: "return",
    },
    {
      question: "JavaScript mein console par message dikhane ka sahi tareeka kya hai?",
      options: ["console.log()", "print.console()", "log.console()"],
      answer: "console.log()",
    },
    {
      question: "React mein UI ke reusable hisson ko kya kehte hain?",
      options: ["Components", "Selectors", "Modules"],
      answer: "Components",
    },
    {
      question: "React component se UI dikhane ke liye aam taur par kya return hota hai?",
      options: ["JSX", "SQL", "XML file"],
      answer: "JSX",
    },
    {
      question: "React mein state manage karne ke liye kaunsa hook use hota hai?",
      options: ["useState", "useStyle", "useRoute"],
      answer: "useState",
    },
    {
      question: "React mein side effects ke liye kaunsa hook use hota hai?",
      options: ["useEffect", "useSide", "useAction"],
      answer: "useEffect",
    },
    {
      question: "React list mein items ki pehchan ke liye kaunsa prop zaroori hota hai?",
      options: ["key", "idName", "indexKey"],
      answer: "key",
    },
    {
      question: "React mein data parent se child component tak kaise bhejte hain?",
      options: ["Props", "State only", "Events"],
      answer: "Props",
    },
    {
      question: "HTML form mein user se text lene ke liye kaunsa input type hai?",
      options: ["text", "string", "letters"],
      answer: "text",
    },
    {
      question: "HTML mein unordered list banane ke liye kaunsa tag hai?",
      options: ["<ul>", "<ol>", "<li>"],
      answer: "<ul>",
    },
    {
      question: "CSS mein Flexbox layout shuru karne ke liye display ki value kya hai?",
      options: ["flex", "block", "grid-row"],
      answer: "flex",
    },
    {
      question: "JavaScript mein kisi value ka data type jaanne ke liye kya use karte hain?",
      options: ["typeof", "typecheck", "datatype()"],
      answer: "typeof",
    },
    {
      question: "JavaScript mein constant declare karne ka keyword kaunsa hai?",
      options: ["const", "fixed", "static"],
      answer: "const",
    },
    {
      question: "HTML mein line break ke liye kaunsa tag use hota hai?",
      options: ["<br>", "<lb>", "<break>"],
      answer: "<br>",
    },
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
        <h2>
          Score: {score} / {questions.length}
        </h2>
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
