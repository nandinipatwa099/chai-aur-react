import { useState } from 'react'


 // main react component App()
 // input store typed by user 
function App() {
  const [inputText, setinputText] = useState("");

  // array of tasks - store all tasks
  const [todos, setTodos] = useState([]);

  // addtodo function
  const addtodo = () => {
    if (inputText.trim() === "")return;  //Prevent Adding Empty Todo

    const newTodo = {  // Create a New Todo Object
      id: Date.now(),
      text: inputText,
      completed: false
    };

    setTodos([...todos, newTodo]); //Add New Todo to Existing List

    setinputText(""); //After adding the task, the input becomes empty again.
  };


  // deletetodo function
  const deletetodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  } //So .filter() is used because it keeps everything except the one you delete.



 
  // This is what React shows on the screen.

  return (
    <>

    <div className='flex flex-col items-center justify-center '>

      <h1 className='font-bold p-2 m-2 text-center text-rose-400 text-xl '>Todo App Task </h1>

   {/* //Input box */}
   <div className='flex items-center gap-3 m-2'>

    <input type="text"
   value={inputText}   /*Input box always shows the state*/
   onChange={(e) => setinputText(e.target.value)} /*updates state when user types*/
   placeholder='enter your task...'
   className='border p-2 m-2 ' 
   
   />

    
   <button 
   onClick={addtodo}
   className='bg-blue-600 px-3 py-1 text-white rounded '>
    Add Todo</button>
    
   </div>
   

  {/* //map() loops through each item in an array and returns new JSX elements */}
    <ul>{todos.map((todo) => (
      <li key={todo.id} className='text-lg pl-2 flex items-center gap-4'><span>{todo.text}</span>


    <button onClick={() => deletetodo(todo.id )} className="bg-red-500 text-white px-2 py-1 m-1 rounded">Delete</button>
      </li>
    ) )
    }
    </ul>

    </div>
   
  
   
  
   




    </>
  )
}

export default App
