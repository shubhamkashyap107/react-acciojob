import React from 'react'

const ComponentA = (props) => {
    const{name, designation, companyName, bg} = props;
  return (
    <div style={{display : "flex", height : "200px", justifyContent : "space-between", backgroundColor : ("#" + bg)}}>
        <div style={{ width : "50%", display: 'flex', alignItems : 'center', justifyContent : "center"}}>
            <div style={{ width : "50%"}}>
                <ul style={{listStyle : "none"}}>
                    <li>{name}</li>  
                    <li>{designation}</li>  
                    <li>{companyName}</li>  
                </ul> 
            </div>
        </div>
        <div style={{ width : "50%", display : "flex", alignItems : "center", justifyContent : 'center'}}>
            <img style={{height : "80%", borderRadius : "50%"}} src='https://pbs.twimg.com/media/F_Hj8AebgAA7cMI.jpg' />
        </div>
    </div>
  )
}

export default ComponentA