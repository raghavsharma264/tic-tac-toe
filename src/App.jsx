import { useEffect, useState } from "react";

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
  const [status, setStatus] = useState("");

  function checkWinner(square) {
    const winnerValue = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];

    for (let i = 0; i < winnerValue.length; i++) {
      const [value1, value2, value3] = winnerValue[i];

      if (
        square[value1] &&
        square[value1] === square[value2] &&
        square[value1] === square[value3]
      ) {
        return square[value1];
      }
    }
    return null;
  }

  function handleClick(getCurrentSquare) {
    let copyOfSquare = { ...square };
    if (checkWinner(copyOfSquare) || copyOfSquare[getCurrentSquare]) return;
    copyOfSquare[getCurrentSquare] = user1Turn ? "X" : "O";
    setUser1Turn(!user1Turn);
    setSquare(copyOfSquare);
  }

  useEffect(() => {
    if (!checkWinner(square) && square.every((item) => item !== "")) {
      setSquare("It's a Draw! Please restart the game");
    } else if (checkWinner(square)) {
      setStatus(`Winner is ${checkWinner(square)}`);
    } else {
      setStatus(`Next player is ${user1Turn ? "X" : "O"}`);
    }
  }, [square, user1Turn]);

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
        <div className="status">
          <h1>{status}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
