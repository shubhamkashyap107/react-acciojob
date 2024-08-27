import React from 'react'
import { addText } from '../utils/exampleSlice'
import{useDispatch} from "react-redux"

const CompB = () => {

  const dispatch = useDispatch()

 

  return (
    <div>
      <input className='bg-gray-200' type='text' onChange={(e) => {
        dispatch(addText(e.target.value))
      }} />
     
    </div>
  )
}

export default CompB