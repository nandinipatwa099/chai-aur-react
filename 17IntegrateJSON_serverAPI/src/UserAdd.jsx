import { useState } from "react";
import { useNavigate } from "react-router";
// import { useParams } from "react-router";

function UserAdd(){
    // const {id} = useParams();
    // console.log("id value in UserAdd component ", id);

    const [name, setName] = useState("");
    const [age,setAge] = useState("");
    const [email,setEmail] = useState("");
    const navigate = useNavigate(); 

    const createUser = async()=> {
        console.log(name, age, email);
        const url = "http://localhost:4000/users"
        let response = await fetch(url, {
            method: "Post",  // every time is called this a new record is permamently saved in db.json
            // json server never deletes old data automatically
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, age, email})
        });
        response = await response.json();
        // console.log(response);
        if(response){
            alert("user added");
            navigate("/"); // redirect to user list after adding user


    }
}

    return(
        <>
    
        <div style={{textAlign: "center"}}>
             <h2>Add New User</h2>

            <input type="text" 
            onChange={(event) => setName(event.target.value)} placeholder="enter your name"/>
            <br /> <br />
            <input type="number" 
            onChange={(event) => setAge(event.target.value)} placeholder="enter your age" />
            <br /><br />
            <input type="email"
             onChange={(event) => setEmail(event.target.value)} placeholder="enter your email" />
            <br /><br />
            <button onClick={createUser}>Add User</button>
        </div>
        </>
    )
}


export default UserAdd;