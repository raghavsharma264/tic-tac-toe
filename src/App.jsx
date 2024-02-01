import { useState } from "react";

import "./App.css";

function SquareButton({ value, onClick }) {
  return (
    <button onClick={onClick} className="squareButton">
      {value}
    </button>
  );
}

function App() {
  const [square, setSquare] = useState(Array(9).fill(""));
  const [user1Turn, setUser1Turn] = useState(true);

  function handleClick(getCurrentSquare) {
    let copyOfSquare = { ...square };
    copyOfSquare[getCurrentSquare] = user1Turn ? "X" : "0";
    setUser1Turn(!user1Turn);
    setSquare(copyOfSquare);
  }

  return (
    <>
      <div className="header">
        <h1>
          <a href="">Tic-Tac-Toe</a>
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <SquareButton value={square[0]} onClick={() => handleClick(0)} />
          <SquareButton value={square[1]} onClick={() => handleClick(1)} />
          <SquareButton value={square[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="row">
          <SquareButton value={square[3]} onClick={() => handleClick(3)} />
          <SquareButton value={square[4]} onClick={() => handleClick(4)} />
          <SquareButton value={square[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="row">
          <SquareButton value={square[6]} onClick={() => handleClick(6)} />
          <SquareButton value={square[7]} onClick={() => handleClick(7)} />
          <SquareButton value={square[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}

export default App;
