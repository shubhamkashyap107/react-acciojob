import React from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

const App = () => {
  const[count, setCount] = useState(0)
  const[value, setValue] = useState(1)

 

  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
       return false;
      }
    }
    return true;
   }
  
   //Function to find the nth prime number
   const findNthPrime = useCallback((n) => {
    let count = 0;
    let num = 2;
    while (count < n) {
      if (isPrime(num)) {
       count++;
      }
      num++;
    }
    return num - 1;
   }, [value])

   const ans = useMemo( () => {
    return findNthPrime(value)
   },[value])

  return (
    <div>

      <div>
        <input type="number" placeholder='Enter your number' value={value} onChange={(e) => {
          setValue(e.target.value)
        }} />
        <p>{value}th prime number is {ans}</p>
      </div>


      <div>

        <h1>Count is : {count}</h1>
        <button onClick={() => {
          setCount(count + 1)
        }} >Increment</button>
      
      </div>
    </div>
  )
}

export default App

// useMemo, useCallback, usememo - > variables/values, usecallback -> functions