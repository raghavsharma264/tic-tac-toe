import { useState } from "react";

import "./App.css";

function SquareButton({ value }) {
  return <button className="squareButton">{value}</button>;
}

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
    <div className="header">
      <h1><a href="">Tic-Tac-Toe</a></h1>
    </div>
      <div className="container">
        <div className="row">
          <SquareButton />
          <SquareButton />
          <SquareButton />
        </div>
        <div className="row">
          <SquareButton />
          <SquareButton />
          <SquareButton />
        </div>
        <div className="row">
          <SquareButton />
          <SquareButton />
          <SquareButton />
        </div>
      </div>
    </>
  );
}

export default App;
