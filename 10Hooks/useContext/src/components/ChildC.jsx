import React, { useContext } from 'react'
import { userContext } from '../App'

const ChildC = () => {
  const user = useContext(userContext);



  return (
    <div>
     data: {user.name}
    </div>
  )
}

export default ChildC
