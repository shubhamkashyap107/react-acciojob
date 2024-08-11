import React, { useState } from 'react'



const Counter = () => {
    // let count = 0;
    const[count , setCount] = useState(0)


    function plusButtonHandler(){
        // count = count + 1;
        setCount(count + 1)
        console.log(count)
    }

    function minusButtonHandler(){
        // count = count - 1;
        if(count == 0)
        {
            return 
        }
        setCount(count - 1)
        console.log(count)
    }

  return (
    <div style={{padding : "10px",width : "400px", margin : "auto", marginTop :"100px", alignItems : "center", height : "200px", border : "1px solid black", display : "flex", flexDirection : "column", borderRadius : "30px", backgroundColor : "#DFD3C3"}}>
        <div style={{border : "1px solid black", width : "90%", height : "30%", fontSize : "42px", padding : "10px", borderRadius : "20px", backgroundColor : "aliceblue"}}>{count} </div>

        <div style={{ width : "90%", height : "60%", display : "flex", alignItems : "center", justifyContent : "space-around"}}>
            <button style={{height : "40px", width : "60px"}} onClick={plusButtonHandler}>+</button>
            <button style={{height : "40px", width : "60px"}} onClick={minusButtonHandler}>-</button>
        </div>

    </div>
  )
}

export default Counter