import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Outlets from './Components/Outlets.jsx'
import Random from './Components/Random.jsx'
import Example from './Components/Example.jsx'
import Menu from './Components/Menu.jsx'
import { Provider } from 'react-redux'
import store from "./Utils/Store.js"
import Cart from './Components/Cart.jsx'


createRoot(document.getElementById('root')).render(
    <Provider store={store}>

<BrowserRouter>

    <Routes>
        <Route path='/' element={<App />} />
        <Route path='/restaurants' element={<Outlets />} />
        <Route path='/random' element={<Random />} />
        <Route path='/example' element={<Example />} />
        <Route path='/menu/:id' element={<Menu />} />
        <Route path='/cart' element={<Cart />} />

    </Routes>

</BrowserRouter>
    </Provider>


)
