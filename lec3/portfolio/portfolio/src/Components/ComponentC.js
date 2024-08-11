import React from 'react'

const ComponentC = (props) => {
    const{proj1, proj2, proj3, bg} = props
  return (
    <div style={{display : "flex", height : "200px", justifyContent : "space-between", backgroundColor : ("#" + bg)}}>
        <div style={{ width : "50%", display: 'flex', alignItems : 'center', justifyContent : "center"}}>
            <div style={{ width : "50%"}}>
                <ul style={{listStyle : "none"}}>
                    <li>{proj1}</li>  
                    <li>{proj2}</li>  
                    <li>{proj3}</li>  
                </ul> 
            </div>
        </div>
        <div style={{ width : "50%", display : "flex", alignItems : "center", justifyContent : 'center'}}>
            <h1>Projects</h1>
        </div>
    </div>
  )
}

export default ComponentC