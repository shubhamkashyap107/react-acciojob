import React from 'react'
import{Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className=' flex h-[40px] justify-between items-center p-2'>
        <h3 className='text-white font-bold text-xl'>LOGO</h3>



        <div className='flex gap-10 text-white'>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Random</Link>
        </div>
    </div>
  )
}

export default Navbar



