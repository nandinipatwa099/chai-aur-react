import { useState } from "react"
import "./App.css"


function App()   {
 
  // const [name,setName] = useState("");
  const [nameErr,setNameErr] = useState("");
  // const [pass,setpass] = useState("");
  const [passErr,setPassErr] = useState("");

  const handleName = (event)=>{
    console.log(event.target.value); //check

    if(event.target.value.length > 5){
      setNameErr("enter valid username ,only 5 characters allowed ");
    }
    else{
      setNameErr(); //clear error message
    }

    }

    const handlepass = (event)=>{
      console.log(event.target.value); //check

      let regex = /^[A-Z0-9]+$/i; 

      if(regex.test(event.target.value)){
         setPassErr(); //clear error message
      }
      else{
       setPassErr("please enter valid pass , only numbers and alphabets allowed")
      }
    }
  


  return (
    <>
     <div>
      <h2>Simple validation on input fields </h2>
      <input className={nameErr? "error": ""} type='text' onChange={handleName}placeholder='enter name' />
      <span className="red-color">{nameErr && nameErr}</span>
      <br /><br />
      <input className={passErr? "error": ""} type='text' onChange={handlepass} placeholder='enter password' />

      <span className="red-color">{passErr && passErr}</span>
      <br /><br />
      <button disabled={nameErr || passErr}>Login</button>
     </div>
      
    </>
  )
}

export default App
