
import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [userData, setuserData] = useState([]);

  useEffect(() => {
    getUserData();

  }, [])

  async function getUserData(){
    const url = "https://jsonplaceholder.typicode.com/todos";
    let response = await fetch(url); // fetching data from API and return promise 
    response = await response.json(); // converting fetched data to JSON
    // console.log(response.id);
    
    setuserData(response);
    

  }
console.log(userData);

  return (
    <>
    <div>
      <h1>Fetch data from API</h1>
      <ul  className='user-list user-list-head'>
            <li> <h2 >Title</h2></li>
            <li> <h2 >Completed</h2></li>
          </ul>
          

      {/* // data render on screen  */}
      {
        userData && userData.map((user) => (
          <ul key={user.id} className='user-list'>
            <li> <h2 >{user.title}</h2></li>
            <li> <h2 >{String(user.completed)}</h2></li>
          </ul>
        ))
      }
    </div>
    
    </>
  )
}

export default App
