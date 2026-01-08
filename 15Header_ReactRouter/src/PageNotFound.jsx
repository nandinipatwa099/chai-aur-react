import { Link } from "react-router"
import image from "./assets/404_page.jpg"
function PageNotFound() {
    return (
        <>
        <div style={{textAlign:"center"}}>
            <h2>
                Page Not Found
            </h2>
            <h3>404 ERROR</h3>
          <div>
              <Link to="/home"> Go to Home Page </Link>
          </div>
          <br />
            <img style={{width:"70%"}} src={image} alt="load" />
        </div>
        </>
    )
}

export default PageNotFound