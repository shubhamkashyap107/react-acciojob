import React from 'react'

const SaysHi = (props) => {

    const{age, name , favColor} = props;
    

  return (
    <div>{name} whose age is {age} Says Hi!</div>
  )
}

export default SaysHi