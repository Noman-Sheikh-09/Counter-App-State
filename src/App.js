import './App.css'
import {useState} from 'react'
function App(porps) {
  const [name, setData]=useState(0)
  function addIncrement(){
    setData(name + 1)
    
  }
  function addDecrement(){
    setData(name - 1)
  }
  function resetButton(){
    setData(0)
  }
  return (
    <div className="App">
      <button onClick={addDecrement} className='counter'>-</button>
     <h1 className='counter'>{name}</h1>

     <button onClick={addIncrement} className='counter'>+</button>
     <button onClick={resetButton} className='reset'>Reset</button>
    </div>
  );
}

export default App;
