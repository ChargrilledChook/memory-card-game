export default function Header({ score, highScore }) {
  return (
    <header>
      <div>
        <h1>Memory Cards</h1>
        <div>Pick a card, any card - but don't click the same card twice!</div>
      </div>
      {/* Was the basis for a theme picker or ability to change image sets. Leaving in for now in case
      I choose to revist since the html here for it is largely fine
      <div className="theme">
        <label htmlFor="theme">Choose theme:</label>
        <select name="theme" id="theme">
          <option value="cards">Cards</option>
          <option value="dogs">My Dogs</option>
        </select>
      </div> */}
      <div className="score">
        <div>Current Score: {score}</div>
        <div>Highest Score: {highScore}</div>
      </div>
    </header>
  );
}
