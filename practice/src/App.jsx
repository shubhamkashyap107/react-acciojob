import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import{BrowserRouter, Routes, Route} from "react-router-dom"
import CompA from "./Components/CompA"
import CompB from "./Components/CompB"
import CompC from "./Components/CompC"
import CompD from "./Components/CompD"
import SideBar from './Components/SideBar'


const App = () => {

  const[showSidebar, setShowSideBar] = useState(false)

  return (
    <BrowserRouter>
    
    <div>
      <Navbar showSidebar={showSidebar} setShowSideBar={setShowSideBar} />
      <div className='flex'>
      {/* {showSidebar && <SideBar />} */}
      {showSidebar === true ? <SideBar /> : ""}
      <Routes>
      <Route path='/a' element={<CompA />} />
      <Route path='/b' element={<CompB />} />
      <Route path='/c' element={<CompC />} />
      <Route path='/d' element={<CompD />} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App