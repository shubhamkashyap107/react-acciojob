import React, { useEffect, useState } from 'react'
import Restaurants from './Restaurants'
import Shimmer from './Shimmer'

const Outlets = () => {

  const[restaurants, setRestaurants] = useState([])

  useEffect(() => {


    const getData = async() => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6542&lng=77.2373")
      const json = await data.json()
      setRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
 
    }

    getData()

  }, [])


  return restaurants.length == 0 ? <Shimmer /> :  (
    <div>
      
      <nav class="bg-orange-500 p-4">
        <div class="container mx-auto flex justify-between items-center">
            <div class="text-white font-bold text-xl">
                HandsomeNavbar
            </div>
            <div class="space-x-4">
                <a href="#" class="text-white hover:text-orange-200">Home</a>
                <a href="#" class="text-white hover:text-orange-200">About</a>
                <a href="#" class="text-white hover:text-orange-200">Services</a>
                <a href="#" class="text-white hover:text-orange-200">Contact</a>
            </div>
        </div>
    </nav>

  <div className='grid grid-cols-4 w-fit gap-[60px] mx-auto mt-5'>

      {restaurants.map((item) => {
        return <Restaurants obj={item} />
      })}
  </div>
    </div>
  )
}

export default Outlets