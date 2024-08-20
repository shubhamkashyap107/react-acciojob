import React, { useContext } from 'react'
import { themeContext } from '../App'

const Body = () => {
    const{theme} = useContext(themeContext)
  return (
    <h1 style={{backgroundColor : theme == "light" ? "black" : "white", color : theme == "light" ? "white" : "black" }}>
        theme : {theme}
    </h1>
  )
}

export default Body