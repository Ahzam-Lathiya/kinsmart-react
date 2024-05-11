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

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){
    if(squares[i] != undefined && squares[i] != null){
      return;
    }

    const nextSquares = squares.slice();

    if(xIsNext){
      nextSquares[i] = "x";
    }
    else{
      nextSquares[i] = "o";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return(
  <>
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
}

export default App
