import React, { useContext } from 'react'
import { userContext } from '../App'  //import first


function ChildC() {
  const user = useContext(userContext);
  return (
    <div>
      Hello <br></br>
      data : {user.name}
    </div>
  )
}

export default ChildC
