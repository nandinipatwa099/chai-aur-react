

import Chai from "./chai"

function App() {

// inject variables
  const username = "chai aur code"

  return (
    // <h1>Chai aur react with vite | Nandini </h1>

    // jsx concept

    // fragment tag
    <> 
    <Chai/>
    <h1>Hii react {username} </h1>   {/* evaluated expression */}
    <p>hello test para</p>
    </>
   
  )
} 

export default App
