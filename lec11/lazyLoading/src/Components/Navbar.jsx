import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-black text-white flex justify-evenly p-2'>
        <Link to={"/a"}>Comp A</Link>
        <Link to={"/b"}>Comp B</Link>
        <Link to={"/c"}>Comp C</Link>
        <Link to={"/d"}>Comp D</Link>
    </div>
  )
}

export default Navbar