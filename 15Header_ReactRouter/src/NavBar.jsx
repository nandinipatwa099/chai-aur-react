import {  NavLink, Outlet } from "react-router";
import "./header.css"

function NavBar() {
  return (
    <>
    <div>
      <div className="header">
        <div>
          <NavLink className="link" to={"/home"}>
            <h2>Logo</h2>
          </NavLink>
        </div>

        <div>
          <ul>
            <li>
              <NavLink className={({isActive})=> (isActive? 'custom-active link': 'link')} to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/in/user/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/in/user/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/college">
                College
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/user">
                Users
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/user/list">
                Lists
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      
      <Outlet />
    </div>
      
    </>
  );
}

export default NavBar;
