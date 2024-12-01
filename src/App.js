import "./App.css";
import React, { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      className="w-8 h-8 border border-black bg-white text-center flex items-center justify-center 
                 hover:bg-gray-200 transition-colors duration-200 font-bold text-xl"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function calculateWinner(squares) {
  const boardSize = 20;

  // Check horizontal
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col <= boardSize - 5; col++) {
      const check = [];
      for (let i = 0; i < 5; i++) {
        check.push(squares[row * boardSize + col + i]);
      }
      if (check.every((square) => square === check[0] && square !== null)) {
        return check[0];
      }
    }
  }

  // Check vertical
  for (let col = 0; col < boardSize; col++) {
    for (let row = 0; row <= boardSize - 5; row++) {
      const check = [];
      for (let i = 0; i < 5; i++) {
        check.push(squares[(row + i) * boardSize + col]);
      }
      if (check.every((square) => square === check[0] && square !== null)) {
        return check[0];
      }
    }
  }

  // Check diagonal (top-left to bottom-right)
  for (let row = 0; row <= boardSize - 5; row++) {
    for (let col = 0; col <= boardSize - 5; col++) {
      const check = [];
      for (let i = 0; i < 5; i++) {
        check.push(squares[(row + i) * boardSize + (col + i)]);
      }
      if (check.every((square) => square === check[0] && square !== null)) {
        return check[0];
      }
    }
  }

  // Check diagonal (top-right to bottom-left)
  for (let row = 0; row <= boardSize - 5; row++) {
    for (let col = 4; col < boardSize; col++) {
      const check = [];
      for (let i = 0; i < 5; i++) {
        check.push(squares[(row + i) * boardSize + (col - i)]);
      }
      if (check.every((square) => square === check[0] && square !== null)) {
        return check[0];
      }
    }
  }

  // Check for draw (board is full)
  if (squares.every((square) => square !== null)) {
    return "Draw";
  }

  return null;
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner === "Draw") {
    status = "Draw! No winner.";
  } else if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="status text-2xl font-bold mb-6 text-gray-800">
        {status}
      </div>
      <div
        className="game-board w-[610px] border-black"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(20, minmax(0, 1fr))",
        }}
      >
        {squares.map((squareValue, i) => {
          // Log row and column to help diagnose layout
          const row = Math.floor(i / 20);
          const col = i % 20;
          console.log(`Square ${i}: Row ${row}, Column ${col}`);

          return (
            <Square
              key={i}
              value={squareValue}
              onSquareClick={() => handleClick(i)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(400).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move} className="mb-2">
        <button
          onClick={() => jumpTo(move)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 
                     transition-colors duration-200 w-full text-left"
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div
      className="game-container flex flex-col md:flex-row justify-center items-start 
                    space-y-6 md:space-y-0 md:space-x-8 p-4 md:p-8 min-h-screen bg-gray-50"
    >
      <div className="game-board-container w-full md:w-auto">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div
        className="game-info w-full md:w-64 max-h-[810px] overflow-y-auto 
                      bg-white shadow-md rounded-lg p-4"
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800">Game History</h2>
        <ol className="space-y-2">{moves}</ol>
      </div>
    </div>
  );
}
