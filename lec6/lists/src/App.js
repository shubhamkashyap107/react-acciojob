import React, { useEffect } from 'react'
import Box from "./Components/Box.js"
import NewHook from './Components/NewHook.js'

const arr = [{name : "Chandan Bhaiya", id : 0}, {name : "Kanchan mam", id : 1}, {name : "Nikita Mam", id : 2}, {name : "Salman Bhaiya", id : 3}, {name : "Suraj Bhaiya", id : 4}]

// if the items are being reordered, then react may confuse and re render the wrong component

const App = () => {



  return (
    <div>
      {/* {  arr.map((item) => {
        return <Box text={item.name} key={item.id} />
      }) } */}


        <NewHook />

    </div>
  )
}

export default App