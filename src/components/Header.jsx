export default function Header(props) {
  return (
    <header>
      <div>
        <h1>Memory Cards</h1>
        <div>Don't click the same card twice!</div>
      </div>
      {/* <div className="theme">
        <label htmlFor="theme">Choose theme:</label>
        <select name="theme" id="theme">
          <option value="cards">Cards</option>
          <option value="dogs">My Dogs</option>
        </select>
      </div> */}
      <div className="score">
        <div>Current Score: {props.score}</div>
        <div>Highest Score: {props.highScore}</div>
      </div>
    </header>
  );
}
