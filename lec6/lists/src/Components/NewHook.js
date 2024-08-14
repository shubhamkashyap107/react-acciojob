import React, { useEffect, useState } from 'react'



const NewHook = () => {

    console.log("New hook component is rendered");
    

    const[count, setCount] =useState(0)
    const[count2, setCount2] =useState(0)

    useEffect(() => {
        console.log("Use effect called");
    }, [count2])


  return (
    <div>
    <div>{count}</div>
    <button onClick={() => {
        setCount(count + 1)
    }}>Click Me</button>
    </div>
  )
}

export default NewHook