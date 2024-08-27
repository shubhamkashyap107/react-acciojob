import React, { useEffect, useState } from 'react'
import Cards from "./Cards"
import Skeleton from "./Skeleton"

const CompA = () => {

  console.log("Comp rendered")

  const[chars, setChars] = useState([])
  const[filteredArray, setFilteredArray] = useState([])
  // const[query2, setQuery2] = useState()


  useEffect(() => {
    const getData = async() =>{
      const rawData = await fetch("https://hp-api.herokuapp.com/api/characters");
      const json = await rawData.json();

      setChars(json)
      setFilteredArray(json)
      // console.log(chars)


    }

    getData()
  }, [])



  return chars.length == 0 ? <Skeleton /> : 
  
  
  <div>

      <input className='text-black border bg-gray-100 m-2' type="text" name="" id="" onChange={(e) => {
        const query = e.target.value.toLowerCase()
        // setQuery2(query)
        const data = chars.filter((item) => {
          return item.name.toLowerCase().includes(query)
          // return item.name.toLowerCase() == query
        })
        console.log(data)
        setFilteredArray(data)
      }} />

        <div className='grid grid-cols-5'>
          {filteredArray.map((item) => {
            return <Cards key={item.id} name={item.name} image={item.image} />
          })}
        </div>
    </div>
    }

export default CompA

