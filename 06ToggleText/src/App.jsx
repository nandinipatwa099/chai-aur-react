
import { useState } from "react"

function App() {
  const [show, setshow] = useState(false); // default value //initial hidden



  

  return (
    <>
    <div style={{textAlign: "center" , color: "Black" , padding: "14px", margin:"2px"}}>
       <h3>Toggle Text</h3>
   
    
    <button onClick={() => setshow(!show)} style={{backgroundColor: "blue", borderRadius: "6px", padding: "10px 20px", color: "white" , cursor:"pointer"}}>{show? "HideText" : "ShowText"}</button>


     {show && <p style={{marginTop: "20px", fontSize:"18px" }}>Hello Nandini here! </p>}    {/* // this is conditional rendering */}

     </div>


{/* You Learned:

✔ useState
✔ toggling values
✔ conditional UI rendering
✔ dynamic button text
✔ handling click events */}

    </>
  )
}

export default App
