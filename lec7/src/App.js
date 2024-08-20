import React from 'react'
import Counter from "./Components/Counter.js"
import NewHookUseReducer from './Components/NewHookUseReducer.js'
import{Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar.js'
import Page1 from "./Components/Page1.js"
import Page2 from "./Components/Page2.js"
import Page3 from "./Components/Page3.js"
import Page4 from "./Components/Page4.js"

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <NewHookUseReducer /> */}

      <Navbar />

      <Routes>

        <Route path='/page1' element={<Page1 />} />
        <Route path='/page2' element={<Page2 />} />
        <Route path='/page3' element={<Page3 />} />
        <Route path='/page4' element={<Page4 />} />

          

      </Routes>
    </div>
  )
}

export default App