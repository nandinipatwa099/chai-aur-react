import { useCallback, useState } from "react";


function Practice() {

    const [length, setlength] = useState(8);
    const [numberAllowed, setnumberAllowed] = useState(true);
    const [charAllowed , setcharAllowed] = useState(true);
    const [password , setpassword] = useState("");

    const passwordGenerator = useCallback( () => {

     let pass = ""
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"  
     
     if (numberAllowed) str += "0123456789";
     if (charAllowed) str += "!@#$%^&*()-_=+~[]{};:`'" ;

     for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char); //adding avoid overwriting

     } 

     setpassword(pass);

    }, [length, numberAllowed , charAllowed , setpassword])



  return (
  <>

  <h1 className="text-white font-bold text-center text-xl" >Hello from Practice Component</h1>;

  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-300 font-bold '>4</div>
  <h1 className='text-blue-200 text-center my-3 text-xl font-bold '>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>

        </div>




  </> 
  ) 
}

export default Practice;

