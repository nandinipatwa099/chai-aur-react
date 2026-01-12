import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userdata, setuserdata] = useState([]);
  const [loading , setloading] = useState(false);

  useEffect(() => {
    debugger
    setloading(true);

    getUserData();
  }, []);

  const getUserData = async () => {
    debugger
    try{
      //risky code
       const url = "http://localhost:4000/users";
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
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
  console.log(userdata);

  return (
    <>
      <h2>Integrate JSON Server API</h2>
       <ul className="user-list user-list-head">
          <li>Name </li>
          <li>Age</li>
          <li>Email</li>
        </ul>

      {
      !loading?
      userdata.map((user) => (
        <ul key={user.name} className="user-list">
          <li>{user.name} </li>
          <li>{user.age}</li>
          <li>{user.email}</li>
        </ul>
      ))
      : <h2>Data Loading...</h2>
    
    }
    </>
  );
}

export default App;
