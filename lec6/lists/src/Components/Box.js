import React from 'react'

const Box = (props) => {

    const{text} = props

  return (
    <div style={{border : "1px solid black", height :"100px", width : "100px"}}>{text}</div>
  )
}

export default Box