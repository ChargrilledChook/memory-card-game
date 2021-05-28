import "./App.css";
import React, { useState } from "react";
import Card from "./components/Card";
import NewCards from "./components/Card";
import { cardData } from "./components/initialData";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const win = () => {
    console.log(score);
    setScore(score + 1);
  };
  const [cards, setCards] = useState(cardData());
  const lose = () => {
    if (score > highScore) setHighScore(score);
    setScore(0);
    setCards(cardData());
  };
  return (
    <div className="wrapper">
      <header>
        <div>
          <h1>Memory Card Game</h1>
          <div>Don't click the same card twice!</div>
        </div>
        <div className="score">
          <div>Current Score: {score}</div>
          <div>High Score: {highScore}</div>
        </div>
      </header>
      <main>
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              selected={card.selected}
              win={win}
              lose={lose}
              setCounter={setScore}
            />
          );
        })}
      </main>
      <footer>By Chook</footer>
    </div>
  );
}

export default App;
