
import { useState } from 'react'
import './App.css'
import College from './College'
import { SubjectContext } from './ContextData'

function App() {
  const [subject , setsubject] = useState("");
  return (
    <>
     <div style={{backgroundColor: 'yellow', padding:10}}>
      <SubjectContext.Provider value={subject}>
      <select value={subject} onChange={(event) => setsubject(event.target.value)}>
        <option value="">Select Subject</option>
        <option value='Maths'>Maths</option>
        <option value='History'>History</option>
        <option value='English'>English</option>
      </select>
      <h1>Context API</h1>
      <button onClick={() => setsubject('')}>Clear Subject</button> 
      <College />
      </SubjectContext.Provider>
     </div>
    </>
  )
}

export default App
