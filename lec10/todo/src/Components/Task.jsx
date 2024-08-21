import React from 'react'

const Task = ({obj}) => {
  return (
    <div className='border min-w-96 rounded-lg m-2 p-2 bg-white'>
        {/* <h3>ID : {obj.id}</h3> */}
        <p>Task : {obj.task}</p>
    </div>
  )
}

export default Task