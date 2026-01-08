
import Home from "./Home"
import Login from "./Login"
import About from "./About"
import {Routes, Route, Navigate} from "react-router-dom"
import NavBar from "./NavBar"
import PageNotFound from "./PageNotFound"
function App() {
  

  return (
    <>
    <NavBar />
    <Routes>
     <Route path="/home" element= {<Home/>} />
     <Route path="/about" element= {<About/>} />
     <Route path="/login" element= {<Login/>} />
     {/* <Route path="/*" element={<PageNotFound/>} /> */}
     <Route path="/*" element={<Navigate to="/login"/>} />
    </Routes>
    </>
  )
}

export default App
