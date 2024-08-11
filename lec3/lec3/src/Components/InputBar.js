import React from 'react'

const InputBar = (props) => {

    const{placeHolderText, type} = props

  return (
    <input type={type} placeholder={placeHolderText} />
  )
}

export default InputBar