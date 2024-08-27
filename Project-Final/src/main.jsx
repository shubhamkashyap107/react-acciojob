import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Outlets from './Components/Outlets.jsx'
import Random from './Components/Random.jsx'
import Example from './Components/Example.jsx'


createRoot(document.getElementById('root')).render(
<BrowserRouter>

    <Routes>
        <Route path='/' element={<App />} />
        <Route path='/restaurants' element={<Outlets />} />
        <Route path='/random' element={<Random />} />
        <Route path='/example' element={<Example />} />

    </Routes>

</BrowserRouter>


)
