import { useEffect, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router";

function App() {
  const [userdata, setuserdata] = useState([]);
  const [loading , setloading] = useState(false);

  const navigate = useNavigate(); {/*for redact editUser function */}

   const url = "http://localhost:4000/users"; // you can use outside as for both work to get , post , delete

  useEffect(() => {
    // debugger
    setloading(true);

    getUserData();
  }, []);

  const getUserData = async () => {
    // debugger
    try{
      //risky code
      //  const url = "http://localhost:4000/users";
    let response = await fetch(url);
    response = await response.json();
    // console.log(response);
    setuserdata(response);

    
    }
    catch(err){
      // handle error
      console.log("Error occured while fetching data ", err);
      
    }
    finally{
      // will execute always
      setloading(false);

    }
    
  };
  // console.log(userdata);

  const deleteUser = async (id) => {
    // console.log(id);
    let response = await fetch(url + "/" + id,{
      method: "Delete",

    });
    // console.log(url + "/" + id);
    response = await response.json();
    // console.log(response);
    if(response){
      alert("user deleted");
      getUserData(); // to refresh the list after delete
    }
  };

  const editUser = async (id)=>{
    // console.log("edit user" ,id);
    navigate("/edit/" + id);

  };

  return (
    <>
      {/* <h2>Integrate JSON Server API</h2> */}
       <ul className="user-list user-list-head">
          <li>Name </li>
          <li>Age</li>
          <li>Email</li>

          <li>Action</li>
        </ul>

      {
      !loading?
      userdata.map((user) => (
        <ul key={user.id} className="user-list">
          {/* // key should be id not name bcz names can repeat */}
          <li>{user.name} </li>
          <li>{user.age}</li>
          <li>{user.email}</li>
          <li><button onClick={() => deleteUser(user.id)}>Delete</button></li>
          <li><button onClick={() => editUser(user.id)}>Edit</button></li>
        </ul>
      ))
      : <h2>Data Loading...</h2>
    
    }
    </>
  );
}

export default App;
