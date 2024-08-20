import React, { useState } from 'react'

const Display = (props) => {
    const{count} = props
    // const[count, setCount] = useState(0)

  return (
    <div>{count}</div>
  )
}

export default Display