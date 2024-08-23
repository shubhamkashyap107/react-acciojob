import React from 'react'
import Task from './Task'

const List = ({tasks, setTasks}) => {
  
  

  return (
    <div className='overflow-scroll h-[300px]'>
        {
            tasks.map((item) => {
                return <Task obj={item} key={item.id} tasks={tasks} setTasks={setTasks} />
            })
        }
    </div>
  )
}

export default List