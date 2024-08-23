import React, { lazy, Suspense } from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import CompA from './Components/CompA'
// import CompD from './Components/CompD'
// import CompC from './Components/CompC'
// import CompB from './Components/CompB'


const CompA = lazy(() => import("./Components/CompA"))
const CompB = lazy(() => import("./Components/CompB"))
const CompC = lazy(() => import("./Components/CompC"))
const CompD = lazy(() => import("./Components/CompD"))




const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navbar />


    <Suspense fallback={<h1>Your page is being loaded...</h1>}>
      <Routes>

        <Route path='/a' element={<CompA />} />
        <Route path='/b' element={<CompB />} />
        <Route path='/c' element={<CompC />} />
        <Route path='/d' element={<CompD />} />
      </Routes>
    
    </Suspense>
    </div>
    </BrowserRouter>
  )
}

export default App