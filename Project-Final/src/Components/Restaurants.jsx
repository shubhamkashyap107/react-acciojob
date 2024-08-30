import React from 'react'
import { useNavigate } from 'react-router-dom'

const imgUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

const Restaurants = ({obj}) => {

  // console.log(obj)
  const{cloudinaryImageId, name, areaName, id} = obj.info
  const navigate = useNavigate()



  return (
    <div onClick={() => {
      navigate(`/menu/${id}`)
    }} className='cursor-pointer border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-lg max-w-sm transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
      <img 
        className='w-[200px] h-[150px] rounded-3xl object-cover mb-4 transition-transform duration-300 hover:scale-110' 
        src={imgUrl + cloudinaryImageId} 
        alt={name} 
      />
      <h3 className='text-xl font-semibold text-gray-800 mb-2 transition-colors duration-300 hover:text-orange-500'>{name}</h3>
      <p className='text-gray-600 transition-colors duration-300 hover:text-orange-400'>{areaName}</p>
    </div>
  )
  
  
}

export default Restaurants