import React from 'react'
import Task from './Task'

const List = ({tasks}) => {
  

  return (
    <div className='overflow-scroll h-[400px]'>
        {
            tasks.map((item) => {
                return <Task obj={item} key={item.id} />
            })
        }
    </div>
  )
}

export default List