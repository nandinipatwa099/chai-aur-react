import { useMemo, useState } from 'react'


function App() {
  const [count, setcount] = useState(0);
  const[input, setinput] = useState(0)

  function expensivetask(num) {
    console.log("Inside Expensive Task")
    for(let i=0; i<=1000000000; i++){} 
    return num*2;
  }

  // let doubleValue = expensivetask(input);
  let doubleValue = useMemo(() => expensivetask(input), [input]);
  // console.log(doubleValue);

  //using useMemo()  //15 line

  


  return (
    <>
    <div style={{alignItems: 'center', textAlign:'center', color:'orange' ,fontSize:'20px', fontWeight:'bold'}}> useMemo() with CodeHelp.in </div>

    <div style={{alignItems: 'center', textAlign:'center',  color:'purple' ,fontSize:'17px', fontWeight: 'bold', margin: '20px', padding:'10px'}}>

      <button onClick={() => setcount(count+1)} >
      Increment
      </button> 

      <div>count : {count}</div>

      <input
      type='number'
      placeholder='enter number'
      value={input} //state variable
      onChange={(e) => setinput(e.target.value)} 

      
      />

     <div>
      double: {doubleValue}
     </div>

    </div>

    </>
  )
}

export default App
