import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const InputBar = ({tasks, setTasks}) => {

  const[todo, setTodo] = useState("")

  return (
    <div>
        <input value={todo} onChange={(e) => {
          setTodo(e.target.value)
        }} placeholder='Enter Your Task' className='border w-[300px] p-2 rounded-lg mr-2' />
        <button onClick={() => {

          console.log(tasks)
         let newTodo = {
          id : uuidv4(),
          task : todo
         } 

        //  tasks.push(newTodo)
        //  console.log(tasks)
         setTasks([...tasks, newTodo])
        }} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add</button>
    </div>
  )
}

export default InputBar