import React, { useState } from 'react'

const Task = ({obj, deleteFn, tasks, setTasks}) => {

  const[isComplete, setIsComplete] = useState(false)

  return (
    <div className='border min-w-96 rounded-lg m-2 p-2 bg-white flex justify-between'>
        {/* <h3>ID : {obj.id}</h3> */}
        <p className={isComplete == true ? "line-through" : ""}>Task : {obj.task}</p>
        <div className='flex gap-2 p-2'>
        <input type='checkbox' onClick={() => {
          setIsComplete(!isComplete)
        }} />

        <span className='cursor-pointer ' onClick={() => {
          const newArr = tasks.filter((item) => {
            return obj.id != item.id
          })

          setTasks(newArr)

        }}>
          🗑️
        </span>
        </div>
    </div>
  )
}

export default Task