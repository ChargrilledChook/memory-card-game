import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <header>
        <h1>Memory Card Game</h1>
        <div className="score">
          <div>Current Score:</div>
          <div>High Score:</div>
        </div>
      </header>
      <main>
        <div className="card">1</div>
        <div className="card">2</div>
        <div className="card">3</div>
        <div className="card">4</div>
        <div className="card">5</div>
        <div className="card">6</div>
        <div className="card">7</div>
        <div className="card">8</div>
        <div className="card">9</div>
        <div className="card">10</div>
        <div className="card">11</div>
        <div className="card">12</div>
      </main>
      <footer>By Chook</footer>
    </div>
  );
}

export default App;
