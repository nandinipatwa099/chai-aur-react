import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
 
function App() {
  const [count, setCount] = useState(0)

  let myObj ={
    name: "hitesh",
    age: 21
  } 

  let newArr = [1,2,3]


  return (
    <> {/* fragments- solve problem to only have one element return, solved this problem by fragements or do 'div' also */}
    
    <h1 className= 'bg-green-400 text-black p-3 rounded-xl mb-4'>Tailwind Test</h1>


  {/* //filling props value */}
    {/* <Card username = "chaiaurcode" SomeObj = {myObj} myarr={newArr} />  */}       {/*passing object and array trying to pass */}

    <Card username = "chaiaurcode" Btntext = "Click me" />

    <Card username= "chaiaurnimbu"  />  {/* reapeat */}
  

    </>
  )
}

export default App
