import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

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
  const [user1Score, setUser1Score] = useState(0);
  const [user2Score, setUser2Score] = useState(0);
  const [user1Input, setUser1Input] = useState("X");
  const [user2Input, setUser2Input] = useState("O");

  const handleInputChange1 = (event1) => {
    setUser1Input(event1.target.value);
  };
  const handleInputChange2 = (event2) => {
    setUser2Input(event2.target.value);
  };

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
    let copyOfSquare = [...square];
    if (checkWinner(copyOfSquare) || copyOfSquare[getCurrentSquare]) return;
    copyOfSquare[getCurrentSquare] = user1Turn ? user1Input : user2Input;
    setUser1Turn(!user1Turn);
    setSquare(copyOfSquare);
  }

  function handleRestart() {
    setUser1Turn(true);
    setSquare(Array(9).fill(""));
  }

  useEffect(() => {
    console.log("square:", square);
    console.log("user1Turn:", user1Turn);

    const winner = checkWinner(square);
    if (winner) {
      setStatus(`Winner is ${winner}. Please restart the game.`);
      if (winner === user1Input) {
        setUser1Score(user1Score + 1);
      }
      if (winner === user2Input) {
        setUser2Score(user2Score + 1);
      }
    } else if (square.every((item) => item !== "")) {
      setStatus(`It's a Draw! Please restart the game.`);
    } else {
      setStatus(`Next player is ${user1Turn ? user1Input : user2Input}`);
    }
  }, [square, user1Turn]);

  return (
    <>
      <div className="header">
        <h1>
          <a href="">Tic-Tac-Toe Game</a>
        </h1>
      </div>
      <div className="mainContainer">
        <div className="userInput">
          <div className="user1">
            <TextField
              id="outlined-basic"
              label="Player 1 Username"
              variant="outlined"
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              id="outlined-helperText"
              label="Player 1 Symbol"
              defaultValue="Default Value"
              value={user1Input}
              onChange={handleInputChange1}
            />
          </div>
          <div className="user2">
            <TextField
              id="outlined-basic"
              label="Player 2 Username"
              variant="outlined"
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              id="outlined-helperText"
              label="Player 2 Symbol"
              defaultValue="Default Value"
              value={user2Input}
              onChange={handleInputChange2}
            />
          </div>
        </div>
        <div className="status">
          <h2>{status}</h2>
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
          <div className="score">
            <h3>Player 1 Score: {user1Score}</h3>
            <h3>Player 2 Score: {user2Score}</h3>
          </div>
          <div className="restart">
            <button className="button" onClick={handleRestart}>
              Restart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
