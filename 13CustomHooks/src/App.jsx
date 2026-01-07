
import './App.css'
import useToggle from './useToggle'

function App() {
  
const [value, toggleValue] = useToggle(true);

const [data, setdata] = useToggle(true);

// console.log("val----", value);
  return (
    <>
   <div>
    <button onClick={toggleValue}>Toggle Heading</button>
    <button onClick={()=> toggleValue(false)}>Hide Heading</button>
    <button onClick={()=> toggleValue(true)}>Show Heading</button>

    {
     value? <h1>Custom Hooks in React js</h1> : null
    }
    <hr />
     <button onClick={setdata}>Toggle Heading</button>
    <button onClick={()=> setdata(false)}>Hide Heading</button>
    <button onClick={()=> setdata(true)}>Show Heading</button>
    
    {
      data? <h1>second heading</h1> : null
    }
   </div>
    </>
  )
}


export default App
