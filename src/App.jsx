import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
  const [user1Name, setUser1Name] = useState("Player 1");
  const [user2Name, setUser2Name] = useState("Player 2");
  const [user1Input, setUser1Input] = useState("X");
  const [user2Input, setUser2Input] = useState("O");

  const [currWinner, setCurrWinner] = useState("");
  const [currWinnerSymbol, setCurrWinnerSymbol] = useState("");
  const [history, setGameHistory] = useState([]);

  let userWinnerHistory;

  const handleInputChangeName1 = (name1) => {
    setUser1Name(name1.target.value);
  };
  const handleInputChangeName2 = (name2) => {
    setUser2Name(name2.target.value);
  };

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

  const winner = checkWinner(square);
  // console.log(winner);

  // Shows all played games result history
  const newGameHistory = [...history, winner];
  // console.log("new", newGameHistory);

  useEffect(() => {
    if (winner) {
      const winnerName = winner === user1Input ? user1Name : user2Name;
      const winnerSymbol = winner === user1Input ? user1Input : user2Input;

    }
  }, [square, user1Turn]);

  return (
    <>
    </>
  );
}

export default App;
