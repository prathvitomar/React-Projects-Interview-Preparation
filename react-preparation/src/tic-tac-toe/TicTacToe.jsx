import React from "react";
import "./tictactoe.css";

function TicTacToe({ value, onClick }) {
  return (
    <>
      return (
      <button onClick={onClick} className="square">
        {value}
      </button>
      );
    </>
  );
}

export default TicTacToe;
