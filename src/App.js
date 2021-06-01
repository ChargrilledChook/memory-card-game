import "./App.css";
import React, { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const win = () => {
    console.log(score);
    setScore(score + 1);
    // High score should update on a win too
  };

  const lose = () => {
    if (score > highScore) setHighScore(score);
    setScore(0);
  };
  return (
    <div className="wrapper">
      <Header score={score} highScore={highScore} />
      <Main win={win} lose={lose} />
      <Footer />
    </div>
  );
}

export default App;
