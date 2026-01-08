import { Link, NavLink, Outlet } from "react-router";

function College() {
    return(
        <div className="college" style={{textAlign:"center"}}>
            <h1>College Page</h1>
            <h3><Link to="/home">Go back to home</Link></h3>

            <NavLink className="link" to= "">Student</NavLink>
            <NavLink className="link" to= "department">Department</NavLink>
            <NavLink className="link" to= "details ">College Details</NavLink>
            <Outlet />

        </div>

    )
}

export default College;