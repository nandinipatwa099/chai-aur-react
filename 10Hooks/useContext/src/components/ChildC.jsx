import React, { useContext } from 'react'
// import { userContext } from '../App'  //import first

import { ThemeContext, userContext } from '../App'


function ChildC() {
  const user = useContext(userContext);

  const {theme, setTheme} = useContext(ThemeContext);
  function ToggleTheme() {
    if(theme === 'light')
      setTheme('dark')
    else
      setTheme('light')

  }
  return (
    <>
    <div>
      <h4 style={{color:"red"}}>Hello</h4> <br />
      {/* theme: {theme}  */}
      
      <button onClick={ToggleTheme}>
        Change Theme
      </button>
      
        {/* Hello <br />
        data : {user.name} */}
    </div>



    <div>
      Hello <br />
      data : {user.name}
    </div>
    </>
  )
}

export default ChildC
