// import React, { createContext, useState } from 'react'
// import MainComp from './Components/MainComp'

// // CONTEXT APIS


// export const prefContext = createContext()

// const App = () => {

//   const[preference, setPreference] = useState("T-Shirts")
//   const[preference2, setPreference2] = useState("T-Shirts")

//   return (
//     <prefContext.Provider value={{preference, preference2}}>
//     <div>
//       <MainComp  />
//     </div>
//     </prefContext.Provider>
//   )
// }

// export default App


// import React, { createContext, useState } from 'react'
// import Body from './Components/Body'
// import ThemeToggleButton from './Components/ThemeToggleButton'

// export const themeContext = createContext()

// const App = () => {

//   const[theme, setTheme] = useState("light")
//   // console.log(theme)
//   return (
//     <themeContext.Provider value={{theme, setTheme}}>

//     <div>
//       <Body  />
//       <ThemeToggleButton   />
//     </div>
    
//     </themeContext.Provider>
//   )
// }

// export default App



import React from 'react'
import Demo from './Components/Demo'

const App = () => {
  return (
    <div>
      <Demo />
    </div>
  )
}

export default App