import React, { useEffect, useState } from 'react'
import Cards from "./Cards"
import Skeleton from "./Skeleton"

const CompA = () => {

  const[chars, setChars] = useState([])

  useEffect(() => {
    const getData = async() =>{
      const rawData = await fetch("https://hp-api.herokuapp.com/api/characters");
      const json = await rawData.json();

      setChars(json)
      // console.log(chars)

    }

    getData()
  }, [])



  return chars.length == 0 ? <Skeleton /> : <div className='grid grid-cols-5'>



  {chars.map((item) => {
    return <Cards key={item.id} name={item.name} image={item.image} />
  })}

</div>
}

export default CompA