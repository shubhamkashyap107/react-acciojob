import React, { useState } from 'react'

const Buttons = (props) => {
    const{count, setCount} = props

    // const[count, setCount] = useState(0)
    // console.log(count);
    

  return (
    <div>
        <button onClick={() => {
            setCount(count + 1)
        }}>Increment</button>
        <button onClick={() => {
            setCount(0)
        }}>Reset</button>
        <button onClick={() => {
            setCount(count - 1)
        }}>Decrement</button>
    </div>
  )
}

export default Buttons