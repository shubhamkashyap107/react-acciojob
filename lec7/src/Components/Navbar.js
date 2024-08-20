import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div style={{display : "flex", gap : "50px"}}>
            {/* <a href='/page1'>One </a>
            <a href='/page2'>Two </a>
            <a href='/page3'>Three </a>
            <a href='/page4'>Four </a> */}

            <Link to="/page1">One</Link>
            <Link to="/page2">two</Link>
            <Link to="/page3">three</Link>
            <Link to="/page4">four</Link>
            
    </div>
  )
}

export default Navbar