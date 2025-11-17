import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'


function App() {
  const [length, setlength] = useState(8) 
  const [numberAllowed , setnumberAllowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const [password, setpassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null)


  // const passwordGenerator = () => {}   // hook using for same methods for optimization
    const passwordGenerator = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if (numberAllowed) str += "0123456789"
      if (characterAllowed) str += "!@#$%^&*()-_=+~[]{};:`'"

      for (let i = 1; i <= length; i++) {
       let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);  //charAt is a string method that returns the character at a specific index (position) in a string.


      }

      setpassword(pass)

      

    } , [length, numberAllowed, characterAllowed, setpassword])

    const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,30);
      window.navigator.clipboard.writeText(password)
    }, [password])

    useEffect( () => {
      debugger //put this
      passwordGenerator()  // by ma'am discussion
    } , [])

    // useEffect( () => {
    //   passwordGenerator()
    // } , [length, numberAllowed, characterAllowed, passwordGenerator])

  return(
    <>
      {/* <h1 className='text-2xl font-bold text-blue-400 text-center '>Password Generator</h1> */}

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-700 '>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef} //notee
          
          />

          <button onClick={copyPasswordToClipboard} className='outline-none  bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min = {6}
            max = {100}
            value = {length}
            className='cursor-pointer'
            onChange={(e) => {setlength(e.target.value)}}
            
            />
           <label >Length: {length}</label> 
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked = {numberAllowed}
            id ="numberInput"
            onChange={() => {setnumberAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={characterAllowed}
            id='characterInput'
            onChange={() => {
              setcharacterAllowed((prev) => !prev);
            }}
            
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

// want button clickable task 
export default App
