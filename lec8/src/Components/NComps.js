import React, { useContext } from 'react'
import { prefContext } from '../App'

const NComps = () => {

    // const {preference} = useContext(prefContext)

  return (
    // <div>{preference}</div>


    <prefContext.Consumer>
       {(props) => {
        const{preference} = props
        return <div>{preference}</div>
       }}
    </prefContext.Consumer>

  )
}

export default NComps