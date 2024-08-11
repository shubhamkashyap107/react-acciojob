import React from 'react'

const ComponentD = (props) => {
    const{linkedin, leetcode, youtube} = props
  return (
    <div style={{height : "200px", display : "flex", justifyContent : 'space-between', backgroundColor : ("#" + "B692C2")}}>
        <div style={{width : "50%", display: "flex", justifyContent : "center", alignItems : "center"}}><h1>Socials</h1></div>
        <div style={{width : "50%" ,  display: "flex", justifyContent : "center", alignItems : "center"}}>
            <div>
                <ul>
                    <li><a href={linkedin}>LinkedIn</a></li>
                    <li><a href={leetcode}>Leetcode</a></li>
                    <li><a href={youtube}>Youtube</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ComponentD