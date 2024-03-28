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

function Home() {
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

  return (
    <>
      <div className="header">
        <h1>
          <a href="" className="title">
            Tic-Tac-Toe Game
          </a>
        </h1>
        <div className="userAcc">
          <Button variant="contained">Login</Button>
          <Button variant="contained">Sign Up</Button>
        </div>
      </div>
      <div className="mainContainer">
        <div className="userInput">
          <div className="user1">
            <TextField
              id="outlined-helperText"
              label="Player 1 username"
              defaultValue="Default Value"
              value={user1Name}
              onChange={handleInputChangeName1}
            />
            <TextField
              id="outlined-helperText"
              label="Player 1 Symbol"
              defaultValue="Default Value"
              value={user1Input}
              onChange={handleInputChange1}
              sx={{ width: "40%", marginLeft: "10px" }}
            />
          </div>
          <div className="restart">
            <button className="button" onClick={handleRestart}>
              Restart
            </button>
          </div>
          <div className="user2">
            <TextField
              id="outlined-helperText"
              label="Player 2 username"
              defaultValue="Default Value"
              value={user2Name}
              onChange={handleInputChangeName2}
            />
            <TextField
              id="outlined-helperText"
              label="Player 2 Symbol"
              defaultValue="Default Value"
              value={user2Input}
              onChange={handleInputChange2}
              sx={{ width: "40%", marginLeft: "10px" }}
            />
          </div>
        </div>
        <div className="status">
          <p className="pst">{status}</p>
        </div>
        <div className="score">
          
        </div>
      </div>
    </>
  );
}

export default Home;
