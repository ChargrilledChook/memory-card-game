import "./App.css";
import React, { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const round = (lose) => {
    if (lose) {
      setScore(0);
    } else {
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > highScore) setHighScore(newScore);
    }
  };
  return (
    <div className="wrapper">
      <Header score={score} highScore={highScore} />
      <Main round={round} gridSize={28} />
      <Footer />
    </div>
  );
}

export default App;
