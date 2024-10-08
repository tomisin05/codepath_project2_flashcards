


import React, { useState } from 'react';
import './App.css';

const flashcards = [
  {
    "question": "What is 'let' in JavaScript?",
    "options": ["Variable declaration", "Function", "Constant", "Loop"],
    "answer": "Variable declaration",
    "difficulty": "easy"
  },
  {
    "question": "Which method is used to convert JSON to an object?",
    "options": ["JSON.stringify", "JSON.parse", "parseInt", "Object.assign"],
    "answer": "JSON.parse",
    "difficulty": "easy"
  },
  {
    "question": "What does '===' signify?",
    "options": ["Assignment", "Strict equality", "Loose equality", "Inequality"],
    "answer": "Strict equality",
    "difficulty": "medium"
  },
  {
    "question": "What is a closure?",
    "options": ["Function inside a function", "Global variable", "Loop block", "Function expression"],
    "answer": "Function inside a function",
    "difficulty": "medium"
  },
  {
    "question": "What does 'this' refer to?",
    "options": ["Refers to current object", "Refers to global object", "Refers to function", "Refers to class"],
    "answer": "Refers to current object",
    "difficulty": "medium"
  },
  {
    "question": "What is a promise in JS?",
    "options": ["Event loop", "Asynchronous operation", "Loop structure", "Global variable"],
    "answer": "Asynchronous operation",
    "difficulty": "medium"
  },
  {
    "question": "Which keyword stops execution of a loop?",
    "options": ["break", "stop", "return", "exit"],
    "answer": "break",
    "difficulty": "easy"
  },
  {
    "question": "What is 'NaN'?",
    "options": ["Undefined", "Null", "Not a number", "Negative number"],
    "answer": "Not a number",
    "difficulty": "easy"
  },
  {
    "question": "What is event delegation?",
    "options": ["Method to handle DOM events", "Loop block", "Server request", "Function argument"],
    "answer": "Method to handle DOM events",
    "difficulty": "medium"
  },
  {
    "question": "What is a callback function?",
    "options": ["A function passed into another function", "Error handler", "Global variable", "Method chaining"],
    "answer": "A function passed into another function",
    "difficulty": "medium"
  },
  {
    "question": "What is hoisting?",
    "options": ["Moving declarations to the top", "Variable initialization", "Function call", "Object creation"],
    "answer": "Moving declarations to the top",
    "difficulty": "medium"
  },
  {
    "question": "Which method is used to remove the last item in an array?",
    "options": ["pop()", "shift()", "splice()", "remove()"],
    "answer": "pop()",
    "difficulty": "easy"
  },
  {
    "question": "What does 'use strict' do?",
    "options": ["Enforces stricter parsing", "Calls a function", "Declares a variable", "Defines a class"],
    "answer": "Enforces stricter parsing",
    "difficulty": "medium"
  },
  {
    "question": "What does the 'new' keyword do?",
    "options": ["Creates an object", "Starts a loop", "Declares a variable", "Calls a function"],
    "answer": "Creates an object",
    "difficulty": "easy"
  },
  {
    "question": "Which array method checks if every element passes a test?",
    "options": ["every()", "filter()", "find()", "map()"],
    "answer": "every()",
    "difficulty": "medium"
  },
  {
    "question": "What does DOM stand for?",
    "options": ["Document Object Model", "Data Object Model", "Document Orientation Model", "Data Operation Method"],
    "answer": "Document Object Model",
    "difficulty": "easy"
  },
  {
    "question": "What is 'null' in JavaScript?",
    "options": ["An empty object", "Undefined value", "Loop exit", "Event handler"],
    "answer": "An empty object",
    "difficulty": "medium"
  },
  {
    "question": "Which operator is used to assign a value?",
    "options": ["=", "==", "===", "!=="],
    "answer": "=",
    "difficulty": "easy"
  },
  {
    "question": "What is an IIFE?",
    "options": ["Immediately Invoked Function Expression", "Inline Invoked Function Expression", "Immediate Inline Function Execution", "Inline Immediately Function Expression"],
    "answer": "Immediately Invoked Function Expression",
    "difficulty": "hard"
  },
  {
    "question": "What is the scope chain?",
    "options": ["Order of variable access", "Loop structure", "Function chaining", "Variable declarations"],
    "answer": "Order of variable access",
    "difficulty": "medium"
  },
  {
    "question": "What does 'typeof' operator return?",
    "options": ["Type of a variable", "Array of values", "Object", "String"],
    "answer": "Type of a variable",
    "difficulty": "easy"
  },
  {
    "question": "Which of the following is a primitive data type?",
    "options": ["Number", "Array", "Object", "Function"],
    "answer": "Number",
    "difficulty": "easy"
  },
  {
    "question": "What is the purpose of 'eval'?",
    "options": ["Evaluates a string as code", "Removes an element", "Sorts an array", "Initializes variables"],
    "answer": "Evaluates a string as code",
    "difficulty": "hard"
  },
  {
    "question": "What is destructuring?",
    "options": ["Unpacking values from arrays/objects", "Creating functions", "Looping through arrays", "Sorting objects"],
    "answer": "Unpacking values from arrays/objects",
    "difficulty": "medium"
  },
  {
    "question": "Which method adds items to the beginning of an array?",
    "options": ["unshift()", "push()", "splice()", "concat()"],
    "answer": "unshift()",
    "difficulty": "medium"
  },
  {
    "question": "What does async/await do?",
    "options": ["Handles asynchronous code", "Initializes variables", "Creates a function", "Loops through objects"],
    "answer": "Handles asynchronous code",
    "difficulty": "medium"
  },
  {
    "question": "What is the 'spread' operator?",
    "options": ["Expands array elements", "Creates an array", "Joins arrays", "Splits strings"],
    "answer": "Expands array elements",
    "difficulty": "hard"
  },
  {
    "question": "Which method checks if an array contains a specific value?",
    "options": ["includes()", "find()", "filter()", "some()"],
    "answer": "includes()",
    "difficulty": "medium"
  },
  {
    "question": "What is the default value of a variable declared without assignment?",
    "options": ["undefined", "null", "0", "empty string"],
    "answer": "undefined",
    "difficulty": "easy"
  },
  {
    "question": "Which method is used to join array elements into a string?",
    "options": ["join()", "concat()", "slice()", "map()"],
    "answer": "join()",
    "difficulty": "easy"
  }
];


function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [feedback, setFeedback] = useState('');

  const currentCard = flashcards[currentCardIndex];

  const handleAnswerChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleCheckAnswer = () => {
    if (userAnswer.trim().toLowerCase() === currentCard.answer.toLowerCase()) {
      setFeedback("Correct!");
    } else {
      setFeedback(`Wrong! The correct answer is ${currentCard.answer}.`);
    }
    setShowAnswer(true);
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex + 1 < flashcards.length ? prevIndex + 1 : 0
    );
    setShowAnswer(false);
    setUserAnswer('');
    setFeedback('');
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : flashcards.length - 1
    );
    setShowAnswer(false);
    setUserAnswer('');
    setFeedback('');
  };

  const handleReshuffle = () => {
    // Shuffle the cards
    const shuffled = flashcards.sort(() => Math.random() - 0.5);
    setCurrentCardIndex(0);
    setShowAnswer(false);
    setUserAnswer('');
    setFeedback('');
  };

  return (
    <div className="flashcard-app">
      <div className={`flashcard ${currentCard.difficulty} ${showAnswer ? 'flipped' : ''}`} onClick={() => setShowAnswer(!showAnswer)}>
        <div className="card-front">
          <h3>{currentCard.question}</h3>
        </div>
        <div className="card-back">
          <h3>{currentCard.answer}</h3>
        </div>
      </div>

      <div className="multiple-choice">
        {currentCard.options.map((option, index) => (
          <label key={index} className="option-label">
            <input
              type="radio"
              name="answer"
              value={option}
              onChange={handleAnswerChange}
            />
            {option}
          </label>
        ))}
      </div>

      <input
        type="text"
        value={userAnswer}
        onChange={handleAnswerChange}
        placeholder="Type your answer here"
      />

      <button onClick={handleCheckAnswer}>Check Answer</button>
      <button onClick={handlePrevCard}>Back</button>
      <button onClick={handleNextCard}>Next</button>
      <button onClick={handleReshuffle}>Reshuffle</button>

      <div className="feedback">{feedback}</div>
    </div>
  );
}



export default App;
