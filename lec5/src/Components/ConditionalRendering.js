import React, { useState } from 'react'

const ConditionalRendering = () => {

    const[showDiv, setShowDiv] = useState(false)

  return (
    <div>
        <button onClick={() => {
            setShowDiv(!showDiv)
        }}>
            {showDiv == true ? "Not a user ? Sign up instead" : "Already a user ? Login instead"}
        </button>
        {/* {showDiv == true ? <div>Login Page</div> : <div>Sign Up</div>} */}


        {/* {showDiv == true ? <div>Hello</div> : ""} */}


        {showDiv && <div>Hello</div>}

    </div>
  )
}

export default ConditionalRendering