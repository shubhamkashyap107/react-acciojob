import React, { useContext } from 'react'
import { themeContext } from '../App'

const ThemeToggleButton = () => {
    const{theme, setTheme} = useContext(themeContext)

  return (
    <div>
        <button onClick={() => {
            setTheme(theme == "light" ? "dark" : "light")
        
        }}>Change Theme</button>
    </div>
  )
}

export default ThemeToggleButton