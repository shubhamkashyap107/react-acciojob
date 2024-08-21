import React from 'react'
import{BrowserRouter, Routes, Route} from "react-router-dom"
import CompA from './Components/CompA'
import CompB from './Components/CompB'
import AnchorAndLink from './Components/AnchorAndLink'


const App = () => {
  return (

    <BrowserRouter>

    <AnchorAndLink />

      <div>
        <Routes>
          <Route path='/a' element={<CompA />} />
          <Route path='/b' element={<CompB />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App