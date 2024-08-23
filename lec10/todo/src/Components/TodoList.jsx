import React from 'react'
import InputBar from './InputBar'
import List from './List'
import { useState } from 'react'



const taskss = [
    {
        id : 1,
        task : "Khana Khao"
    },
    {
        id : 2,
        task : "Brush Kro"
    },
    {
        id : 3,
        task : "So jao"
    },
    {
        id : 4,
        task : "Sapne matt dekho"
    },
]

const TodoList = () => {

    const[tasks, setTasks] = useState(taskss)

  return (
    <div className='mx-auto border w-1/3 flex flex-col items-center mt-10 p-2 rounded-2xl bg-gray-200'>
        <InputBar tasks={tasks} setTasks={setTasks}/>
        <List tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default TodoList