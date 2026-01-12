import { NavLink, Route, Routes } from "react-router";
import App from "./App";
import UserAdd from "./UserAdd";
import "./App.css"



function UserList() {
  
console.log("jiii")
 
  return (
    <>
    <ul className="nav-list">
      <li>
        <NavLink to="/" >List</NavLink>
      </li>
      <li>
        <NavLink to="/add" >Add User</NavLink>
      </li>
    </ul>

      <h2>Make routes and pages for add user and user list UI</h2>
      {/* <App /> // just for checking it connect and run or not  */}
      {/* < UserAdd  just for checking it connect and run or not /> */}
      
      <Routes>
        <Route path="/" element={<App />}  />
        <Route path="/add" element={<UserAdd />}  />
      </Routes>

       

      
    </>
  );
}

export default UserList;
