import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Square( {value, onSquareClick} ){
  // const [value, setValue] = useState(null);

  // function handleClick(){
  //   setValue(this.value);
  // }

  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

function Board({xIsNext, squares, onPlay}){
  function handleClick(i){
    if(squares[i] != undefined && squares[i] != null){
      return;
    }

    if(calculateWinner(squares)){
      return;
    }

    const nextSquares = squares.slice();

    if(xIsNext){
      nextSquares[i] = "x";
    }
    else{
      nextSquares[i] = "o";
    }

    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);

  let status;
  if(winner){
    status = "Winner: " + winner;
  }
  else{
    status = "Next player : " + ( xIsNext ? 'x' : 'o' );
  }

  return(
  <>
  <div className='status'>{status}</div>
  <div className='board-row'>
    {/* <button className="square">X</button>
    <button className="square">X</button>
    <button className="square">X</button> */}
    <Square value={squares[0]} onSquareClick={handleClick.bind(this,0)}/>
    <Square value={squares[1]} onSquareClick={handleClick.bind(this,1)}/>
    <Square value={squares[2]} onSquareClick={handleClick.bind(this,2)}/>
  </div>
  <div className='board-row'>
    <Square value={squares[3]} onSquareClick={handleClick.bind(this,3)}/>
    <Square value={squares[4]} onSquareClick={handleClick.bind(this,4)}/>
    <Square value={squares[5]} onSquareClick={handleClick.bind(this,5)}/>
  </div>
  <div className='board-row'>
    <Square value={squares[6]} onSquareClick={handleClick.bind(this,6)}/>
    <Square value={squares[7]} onSquareClick={handleClick.bind(this,7)}/>
    <Square value={squares[8]} onSquareClick={handleClick.bind(this,8)}/>
  </div>
    {/* //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p> */}
    </>
);

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for(let i=0; i < lines.length; i++){

      let [a,b,c] = lines[i];
      //if first block of line is not null, either 'X' or 'O' exists in that block
      if(squares[a] != undefined){

        //if the first block matches with the second block as well as the third block
        if((squares[a] == squares[b]) && (squares[a] == squares[c])){
          return squares[a];
        }
      }
    }

    return null;

  }
}

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares){
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove){

  }

  const moves = history.map((squares, move) => {
    let description;

    if(move > 0){
      description = 'Go to move # ' + move;
    }
    else{
      description = 'Go to game start';
    }

    return <li key={move}>
      <button onClick={jumpTo.bind(this,move)}>{description}</button>
    </li>
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default App
