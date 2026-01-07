import { Link, NavLink } from "react-router-dom"



function NavBar() {

  return (
    <>
   <div>
    <Link to='/'><h1>home</h1></Link>
    <Link to='/about'><h1>about</h1></Link>


    <NavLink to="/about" style={({isActive}) => ({
      color: isActive ? "orange" : "black", 
    })} ><h1>About</h1></NavLink> 

   </div>
    </>
  )
}

export default NavBar
