import React, { useState } from 'react'
import Buttons from './Buttons'
import Display from './Display'

const Counter = () => {


    const[count, setCount] = useState(0)

  return (
    <>
        <Display count={count} />
        <Buttons count={count} setCount={setCount} />
    </>
    
  )
}

export default Counter