import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

// Step1: create context
 const userContext = createContext();
// Step2: wrap all child inside a provider 
// Step3: pass value
// Step4: consumer ke andr jakr consume krlo

function App() {
 const [user, setuser] = useState({name:"Love"});

  return (
    <>
     <div style={{fontWeight:'bold' , color:'darkcyan', fontSize:'20px'}}>useContext() with CodeHelp.in </div>

     <div>
      <userContext.Provider value={user}>
        <ChildA />
      </userContext.Provider>
      

     </div>
    </>
  )
}

export default App
export {userContext}
