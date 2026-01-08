import { Link } from "react-router";


function Users() {
    const userdata = [
        { id: 1, name: "anil"},
        { id: 2, name: "hari"},
        { id: 3, name: "shyam"},
        { id: 4, name: "raj"},
        { id: 5, name: "prince"},
        { id: 6, name: "samm"},
    ]
    return(
        <div style={{marginLeft:10}}>
            <h1>User list page</h1>
            {
              userdata.map((item)=> (
                <div>
                    <h4><Link to={"/user/"+item.id}>{item.name}</Link></h4>
                </div>
              )) 
            }

            <h1>User list page with Name in URL</h1>
            {
              userdata.map((item)=> (
                <div>
                    <h4><Link to={"/user/"+item.id+"/"+item.name}>{item.name}</Link></h4>
                </div>
              )) 
            }


        </div>
    )
}

export default Users;