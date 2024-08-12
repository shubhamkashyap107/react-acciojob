import React, { useState } from 'react'

const Theme = () => {

    const[theme, setTheme] = useState("dark")
    console.log(theme)

    function darkModeHandler()
    {
        setTheme("dark")
    }

    function lightModeHandler()
    {
        setTheme("light")
    }

    let styleObj = (theme === "light" ? {backgroundColor : "lightBlue", height : "800px"} : {backgroundColor : "darkGray", height : "800px"})
    

  return (
    <div style={styleObj}>
        <div style={{display : "flex"}}>
            <div onClick={darkModeHandler}>🌙</div>
            <div onClick={lightModeHandler}>☀️</div>
        </div>
        <div>
            qwertyuioplkjhgfdsaZxcvbnm,
        </div>
    </div>
  )
}

export default Theme