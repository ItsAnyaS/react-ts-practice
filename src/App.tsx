import React from 'react';
import './App.css';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState<number>(0) 

  return (
    <div className="App">
      <h1>Counter app</h1>
      <p>{count}</p>
      <button onClick={()=> {setCount(prev=>prev+=1)}}>+</button>
      <button onClick={()=> {count > 0 && setCount(prev=>prev-=1)}}>-</button>
    </div>
  );
}

export default App;
