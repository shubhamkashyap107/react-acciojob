import React from 'react'
import SkeletonCard from './SkeletonCards'
import Navbar from './Navbar'

const Shimmer = () => {
  return (
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
    <div className='grid grid-cols-4 mx-auto mt-5'>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
    </div>
    </div>
  )
}

export default Shimmer