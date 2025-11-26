import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

// Step1: create context
 const userContext = createContext();

// Step2: wrap all child inside a provider 
// Step3: pass value
// Step4: consumer ke andr jakr consume krlo


const ThemeContext = createContext();

function App() {
  const [user, setuser] = useState({name: 'Kush'});
  const [theme , setTheme] = useState("light");

  return (
    <>
 
    <userContext.Provider value={user}>
      <ThemeContext.Provider value={{theme, setTheme}}>

      <div id='container' style={{backgroundColor:theme==='light'?"bisque":"black"}} >
        <ChildA /> 
      </div>

      {/* //hierarchy add  //25 */}
      
    </ThemeContext.Provider>

    </userContext.Provider>
    






     {/* <div style={{fontWeight:'bold' , color:'darkcyan', fontSize:'20px'}}>useContext() with CodeHelp.in </div>

     <userContext.Provider value={user}>
       <ChildA />
     </userContext.Provider> */}
    
    </>
  )
}

export default App
export {userContext}
export {ThemeContext}

