import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter ] = useState(5) // useState() hook use have 5 initial value
                         // setCounter- function(any name), counter(anyname)-variable

  // let counter = 5;

  const addValue = () => {
    // console.log("value added", Math.random()); 

    console.log("clicked", counter);   // UI UPDATION PROBLEM - control by react
    // counter = counter + 1;
    setCounter(counter + 1);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }
  


  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Decrease value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}


export default App  

// project Assignment - when decrease not go beyond 0 and when add not go above 20


