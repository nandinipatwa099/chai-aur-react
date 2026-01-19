import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserEdit(){
    const {id} = useParams();
    // console.log(id);

     const [name, setName] = useState("");
        const [age,setAge] = useState("");
        const [email,setEmail] = useState("");

   const url = "http://localhost:4000/users/" + id;
   const navigate = useNavigate();

    useEffect(()=>{

        // prevent hoisting warning as function move inside useEffect
        const getUserData = async() => {
    // console.log(id);
    
    // console.log(url);
    let response = await fetch(url);
    response = await response.json();
    console.log(response);

    setName(response.name);
    setAge(response.age);
    setEmail(response.email);

   }

   if(id){  // to avoid calling when id is undefined
     getUserData()
   }
    },[id,url]);   //dependency added  

    const updateUserdata = async ()=>{
        console.log(name,age,email); //checking
        let response = await fetch(url,{
            method: "Put",
            body: JSON.stringify({name,age,email})
        });
        response = await response.json(); //response string → JavaScript object
        console.log(response);
        if(response){
            alert("user updated");
            navigate("/"); //only navigate when update is successful, prevents redirect on failed API
        }
        

    }



    return(

        <div style={{textAlign:"center"}}>
            <h2>Edit user details</h2>
            <input type="text" value={name} placeholder="user name" onChange={(event)=> setName(event.target.value)} />
            <br /><br />

            <input type="number" value={age} placeholder="user age" onChange={(event)=> setAge(event.target.value)} />
            <br /><br />
            <input type="email" value={email} placeholder="user email" onChange={(event)=> setEmail(event.target.value)} />
            <br /><br />
            <button onClick={updateUserdata} >Update User</button>
        </div>
    )   
}

export default UserEdit;