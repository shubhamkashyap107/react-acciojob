import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import MenuItem from './MenuItem';
import { useSelector } from 'react-redux';

const Menu = () => {
    let { id } = useParams();
    const menuAPI = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6542&lng=77.2373&restaurantId="
    const cartItems = useSelector((state) => state.cart);
    
    const[menuData, setMenuData] = useState([])

    useEffect(() => {
        const getMenuData = async() => {
            const data = await fetch(menuAPI + id)
            const json = await data.json()
            // setMenuData(json)
            // console.log(json)
            const arr = json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            arr.splice(0, 2);
            arr.splice(-2, 2);

            setMenuData(arr)
            console.log(arr)
        }

        getMenuData()
    },[id])



  return (

    <div>

<nav className="bg-orange-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">
            HandsomeNavbar
          </div>
          <div className="space-x-4 flex items-center">
            <Link to="/" className="text-white hover:text-orange-200">Home</Link>
            <Link to="/about" className="text-white hover:text-orange-200">About</Link>
            <Link to="/services" className="text-white hover:text-orange-200">Services</Link>
            <Link to="/contact" className="text-white hover:text-orange-200">Contact</Link>
            <Link to="/cart" className="text-white hover:text-orange-200 flex items-center">
              🛒
              <span className="ml-2">{cartItems.length}</span>
            </Link>
          </div>
        </div>
      </nav>


    <div className='w-6/12 mx-auto mt-5'>

        
        
        
        {menuData.length && menuData.map((item) => {
            return <MenuItem data={item} />
        })}



    </div>
        </div>
  )
}

export default Menu