
import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)

  const CounterMinus=()=>{
    setCounter(counter+1)
 
  }
  const CounterPluse=()=>{
    setCounter(counter-1)
  }

  return (
    <div className="App">
      {<button on onClick={CounterMinus}>+</button>}
      <h1>{counter}</h1>
      {<button onClick={CounterPluse}>-</button>}
    </div>
  );
}

export default App;
