import { Route, Routes, } from "react-router-dom"
import Home from './Home'
import About from "./About"
import NavBar from "./NavBar"

function App() {
 

  return ( 
    <>
    {/* <Link to='/'><h1>home</h1></Link>
    <Link to='/about'><h1>about</h1></Link> */}

    {/* move this to one file that conatin all links */}

   
    {/* <NavLink to="/about" style={({isActive}) => ({
      color: isActive ? "orange" : "black", 
    })} ><h1>About</h1></NavLink>  */}

<NavBar />
  <Routes>
    <Route path="/" element= {<Home/>} />
    <Route path="/about" element= {<About/>} />
  </Routes>
    </>
  ) 
}

export default App
