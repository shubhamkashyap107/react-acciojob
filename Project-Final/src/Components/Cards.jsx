import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cards = ({heading, subheading, discount, linkto}) => {
    const navigate = useNavigate()
  return (
    <div onClick={() => {
        navigate(linkto)
    }} className='bg-white h-[220px] w-[200px] p-4 rounded-xl hover:scale-105 cursor-pointer'>
        <h2 className='font-bold text-lg'>{heading}</h2>
        <h3 className='text-gray-500 font-bold'>{subheading}</h3>
        <p>Upto {discount}% off</p>
    </div>
  )
}

export default Cards