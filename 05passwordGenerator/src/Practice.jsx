import { useCallback, useEffect, useState , useRef } from "react";


function Practice() {

    const [length, setlength] = useState(8);
    const [numberAllowed, setnumberAllowed] = useState(true);
    const [charAllowed , setcharAllowed] = useState(true);
    const [password , setpassword] = useState(""); 

    // want visual higlight at copy button 
    // go to read this -> highlighteffect.md 
    const [copied, setcopied] =useState(false);


    //useRef hook use
    const passwordref = useRef(null)



    const passwordGenerator = useCallback( () => {

     let pass = ""
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"  
     
     if (numberAllowed) str += "0123456789";
     if (charAllowed) str += "!@#$%^&*()-_=+~[]{};:`'" ;

     for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char); //adding(+=) avoid overwriting (=) 

     } 

     setpassword(pass);

    }, [length, numberAllowed , charAllowed , setpassword])  // setpassword-> cache me rkho optimize kro by remember 


    const copyPasswordToClipboard = useCallback(() => {
    
      passwordref.current?.select() //optimize
      passwordref.current?.setSelectionRange(0,10)
      // passwordref.current?.focus()  //focus() only puts the cursor inside the input, It does NOT give any highlight or animation to the button.
       window.navigator.clipboard.writeText(password) //copy huya but not show the highlight or say user also saw copy huya 

      //  want visual higlight at copy button 
       setcopied(true); //show feedback
       setTimeout(() => 
        setcopied(false) , 1500); // remove after 1.5sec

    }, [password]);




    // for call password use new hook -> useEffect()
    useEffect(() => {
      passwordGenerator()
    }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
  <>

  <h1 className="text-white font-bold text-center text-xl" >Hello from Practice Component</h1>;

  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 bg-gray-700 font-bold '>
    <h1 className='text-blue-200 text-center  font-bold '>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input type="text" 
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref = {passwordref} // for null ref

          
          />

          <button onClick={copyPasswordToClipboard} className={`outline-none text-white px-3 py-0.5 shrink-0 rounded ${copied ? "bg-green-700" : "bg-blue-700"}`} >{copied? "Copied!": "Copy"}</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min = {6}
            max ={100}
            value = {length}
            className='cursor-pointer'
            onChange={(e) => {setlength(e.target.value)}}  //range attach to work 
        


            />
            <label> Length: {length}</label>
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
            defaultChecked={charAllowed}
            id='characterInput'
            onChange={() => {
              setcharAllowed((prev) => !prev);
            }}
            
            />
            <label htmlFor="characterInput">Characters</label>
          </div>

          


        </div>
  </div>
  






  </> 
  ) 
}

export default Practice;

