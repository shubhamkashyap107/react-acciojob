import React, { useReducer, useState } from 'react'

function reducerFunc(state, action)
{
    if(action.type === "increment")
    {
        return state + 1
    }
    else if(action.type === "decrement")
    {
        return state - 1
    }
    else
    {
        return 0
    }
}



const NewHookUseReducer = () => {

    // const[count, setCount] = useState(0)
    const[count, dispatch]= useReducer(reducerFunc,0)

  return (
    <div>
        <div>{count}</div>


        <div>
            <button onClick={() => {
                dispatch({type : "increment"})
            }}>Plus</button>
            <button onClick={() => {
                dispatch({type : "reset"})
            }}>Reset</button>
            <button onClick={() => {
                dispatch({type : "decrement"})
            }}>Minus</button>
        </div>
    </div>
  )
}

export default NewHookUseReducer



// use state is used for managing simple state in components. jab the state logic becomes more complex
// we need use reducer