import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Cards from './Components/Cards'

const App = () => {
  return (

    
      <div className='bg-orange-500 h-screen bg-[url("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png")] bg-no-repeat bg-left bg-auto '>
        <Navbar />
        <h1 className='text-7xl text-center mt-10 font-bold text-white '>Order food & groceries. Discover <br/> best restaurants. Swiggy it!</h1>


        <div className='flex  mt-6 justify-evenly'>
          <Cards linkto={"/restaurants"} heading={"FOOD DELIVERY"} subheading={"FROM RESTAURANTS"} discount={60} />
          <Cards linkto={"/mart"} heading={"Instamart"} subheading={"FROM RESTAURANTS"} discount={60} />
          <Cards linkto={"/random"} heading={"Random"} subheading={"FROM RESTAURANTS"} discount={60} />
          <Cards linkto={"/example"} heading={"Example"} subheading={"FROM RESTAURANTS"} discount={60} />
        </div>
      </div>
    

  )
}

export default App