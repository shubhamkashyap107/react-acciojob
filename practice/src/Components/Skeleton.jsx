import React from 'react'
import ShimmerCard from './ShimmerCard'


const Skeleton = () => {
  return (
    <div className='grid grid-cols-5'>
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
    </div>
  )
}

export default Skeleton