import React, { useEffect, useState } from 'react'

const CompB = () => {

    const[count, setCount] = useState(0)

    useEffect(() => {

       const ID = setInterval(() => {
        setCount(count + 1)
        console.log(count)
      }, 1000)


      // clearInterval(ID)




      return function(){
        clearInterval(ID)
      }
    }
    
    
    
    , [count])

  return (
    <div>
        
        {count}

    </div>
  )
}

export default CompB