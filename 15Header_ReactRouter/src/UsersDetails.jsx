import { Link, useParams } from "react-router";



function UsersDetails() {
   const paramsdata = useParams();
   console.log(paramsdata.id);

    return(
        <div style={{marginLeft:10}}>
            <h1>User detail page</h1>
            <h2>user id is :{paramsdata.id}</h2>
            <h3><Link to="/user">Back</Link></h3>
            
        </div>
    )
}

export default UsersDetails;