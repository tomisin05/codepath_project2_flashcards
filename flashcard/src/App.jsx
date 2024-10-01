import React, { useState, useEffect } from 'react';
import './App.css'; // assuming you have some CSS for card styles
const cardSet = {
  title: "Comprehensive React Basics",
  description: "Practice React concepts from beginner to advanced",
  cards: [
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces, primarily for single-page applications.", difficulty: "easy" },
            { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript that allows writing HTML inside React code.", difficulty: "easy" },
            { question: "What is a React component?", answer: "A React component is a reusable piece of the UI that can be a class or function.", difficulty: "easy" },
            { question: "What is the purpose of useState?", answer: "useState is a hook that allows you to add state to functional components.", difficulty: "easy" },
            { question: "What is a prop in React?", answer: "Props are inputs to a React component that allow data to be passed from one component to another.", difficulty: "easy" },
            { question: "What is a state in React?", answer: "State is an object that determines how a component renders and behaves. It is managed within the component.", difficulty: "easy" },
            { question: "What is the virtual DOM?", answer: "The virtual DOM is a lightweight copy of the actual DOM that React uses to optimize UI updates.", difficulty: "medium" },
            { question: "What is a React hook?", answer: "Hooks are functions that let you use React state and lifecycle features in functional components.", difficulty: "medium" },
            { question: "What is the difference between state and props?", answer: "State is managed within a component, while props are passed from parent to child components.", difficulty: "medium" },
            { question: "What is useEffect used for?", answer: "useEffect is a hook that performs side effects, such as data fetching or manually updating the DOM, in functional components.", difficulty: "medium" },
            { question: "Explain the use of keys in React.", answer: "Keys help React identify which elements have changed, added, or removed, improving list rendering performance.", difficulty: "medium" },
            { question: "What are controlled components?", answer: "Controlled components are form elements whose values are controlled by React state, meaning their values are set through state changes.", difficulty: "medium" },
            { question: "What are refs in React?", answer: "Refs provide a way to access DOM nodes or React elements directly in your components.", difficulty: "medium" },
            { question: "What is prop drilling?", answer: "Prop drilling is the process of passing props through multiple nested components, leading to tightly coupled components.", difficulty: "medium" },
            { question: "What are Higher-Order Components (HOCs)?", answer: "HOCs are functions that take a component and return a new component, allowing code reusability across components.", difficulty: "hard" },
            { question: "What is React context?", answer: "React context provides a way to share data across components without passing props manually at every level.", difficulty: "hard" },
            { question: "What is lazy loading in React?", answer: "Lazy loading is the practice of delaying the loading of components until they are needed, optimizing performance.", difficulty: "hard" },
            { question: "What is memoization in React?", answer: "Memoization is an optimization technique used to cache component results, preventing unnecessary re-rendering.", difficulty: "hard" },
            { question: "What is React Router?", answer: "React Router is a library used for routing in React applications, allowing for navigation between different views.", difficulty: "medium" },
            { question: "How does React handle form inputs?", answer: "React handles form inputs with controlled components, where the form data is controlled by React state.", difficulty: "easy" },
            { question: "What is the difference between useState and useReducer?", answer: "useState is simpler for managing small state changes, while useReducer is useful for more complex state logic with multiple sub-values.", difficulty: "hard" },
            { question: "What is the significance of React keys in lists?", answer: "Keys help React track which items have changed, improving the efficiency of rendering dynamic lists.", difficulty: "medium" },
            { question: "What is the role of React.StrictMode?", answer: "StrictMode is a development mode feature that helps identify potential problems in an application by highlighting side effects and deprecated APIs.", difficulty: "medium" },
            { question: "What is the use of fragments in React?", answer: "Fragments allow grouping of child components without adding extra nodes to the DOM.", difficulty: "medium" },
            { question: "What is the difference between class and functional components?", answer: "Class components can use lifecycle methods, while functional components rely on hooks to manage state and side effects.", difficulty: "easy" }
  
  ],
};

const FlashcardApp = () => {
  const [currentCard, setCurrentCard] = useState(null);
  const [showingQuestion, setShowingQuestion] = useState(true);

  // Initialize card set on component mount
  useEffect(() => {
    displayRandomCard();
  }, []);

  const displayRandomCard = () => {
    const randomCard = cardSet.cards[Math.floor(Math.random() * cardSet.cards.length)];
    setCurrentCard(randomCard);
    setShowingQuestion(true);
  };

  const toggleCard = () => {
    setShowingQuestion((prevShowingQuestion) => !prevShowingQuestion);
  };

  if (!currentCard) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flashcard-app">
      <h1>{cardSet.title}</h1>
      <p>{cardSet.description}</p>
      <p>Total cards: {cardSet.cards.length}</p>

      <div
        className={`flashcard ${currentCard.difficulty}`}
        onClick={toggleCard}
      >
        <img src="/react_logo.png" alt="React Logo" className="react-logo" />
        {/* <img src="flashcard\public\react_logo.png" alt="Flashcard" /> */}
        <p>{showingQuestion ? currentCard.question : currentCard.answer}</p>
      </div>

      <button onClick={displayRandomCard}>Next Card</button>
    </div>
  );
};

export default FlashcardApp;
