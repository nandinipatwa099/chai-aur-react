
import Home from "./Home"
import Login from "./Login"
import About from "./About"
import {Routes, Route} from "react-router-dom"
import NavBar from "./NavBar"
function App() {
  

  return (
    <>
    <NavBar />
    <Routes>
     <Route path="/home" element= {<Home/>} />
     <Route path="/about" element= {<About/>} />
     <Route path="/login" element= {<Login/>} />
    </Routes>
    </>
  )
}

export default App
