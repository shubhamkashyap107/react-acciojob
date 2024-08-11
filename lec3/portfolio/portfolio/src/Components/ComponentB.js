import React from 'react'

const ComponentB = (props) => {
    const{mainSkill, secondSkill, thirdSkill} = props


  return (
    <div style={{height : "200px", display : "flex", justifyContent : 'space-between', backgroundColor : ("#" + "B692C2")}}>
        <div style={{width : "50%", display: "flex", justifyContent : "center", alignItems : "center"}}><h1>Skills</h1></div>
        <div style={{width : "50%" ,  display: "flex", justifyContent : "center", alignItems : "center"}}>
            <div>
                <ul>
                    <li>{mainSkill}</li>
                    <li>{secondSkill}</li>
                    <li>{thirdSkill}</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ComponentB