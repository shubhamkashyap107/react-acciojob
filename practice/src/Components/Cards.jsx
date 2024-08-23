import React from 'react'

const Cards = ({image, name}) => {
  return (
    <div className='border rounded-lg p-2 flex flex-col items-center m-4'>
        
        <img className='w-[150px] h-[270px]' src={image} alt='Link broken...'/>

        <h3 className='text-center mt-2'>{name}</h3>
        
    </div>
  )
}

export default Cards