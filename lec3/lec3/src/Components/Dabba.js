import React from 'react'

const Dabba = (props) => {
    const{height, width, color} = props
    const styleObj = {
        height : height,
        width : width,
        backgroundColor : color,
        border : "1px solid black"
    }

  return (
    <div style={styleObj}>khbdfgjdfg
    </div>
  )
}

export default Dabba