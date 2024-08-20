import React from 'react'

const ChotaDiv = ({title, body}) => {
  return (
    <div style={{height : "300px", width : "300px", border : "1px solid black", padding : "10px"}}>
            <h1>{title}</h1>
            <p>{body}</p>
    </div>
  )
}
export default ChotaDiv