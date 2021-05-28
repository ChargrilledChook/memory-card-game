export default function Header(props) {
  return (
    <header>
      <div>
        <h1>Memory Card Game</h1>
        <div>Don't click the same card twice!</div>
      </div>
      <div className="score">
        <div>Current Score: {props.score}</div>
        <div>High Score: {props.highScore}</div>
      </div>
    </header>
  );
}
