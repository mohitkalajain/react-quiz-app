import React from "react";
import ReactDOM from "react-dom/client";
import Quiz from "./components/Quiz";
import "./index.css";
import { QuizProvider } from "./contexts/quiz";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //React.StrictMode Used only in development mode it helps catch potential issues early
  <React.StrictMode>
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  </React.StrictMode>
);
