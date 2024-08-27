import React from 'react'
import {Link} from "react-router-dom"


const Navbar = ({showSidebar, setShowSideBar}) => {

  return (
    <div className='bg-black text-white flex justify-evenly p-2'>
        <button onClick={() => {
          setShowSideBar(!showSidebar)
          // console.log(showSidebar)

        }}>😎</button>
        <Link to={"/a"}>Harry Potter</Link>
        <Link to={"/b"}>CompB</Link>
        <Link to={"/c"}>CompC</Link>
        <Link to={"/d"}>CompD</Link>
        
    </div>
  )
}

export default Navbar