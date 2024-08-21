import React from 'react'
import{Link, useNavigate} from "react-router-dom"

const AnchorAndLink = () => {
    const navigate = useNavigate()
  return (
    <div>
        {/* <a href='/a' >COMP A </a> */}
        {/* <Link to={'/a'}>Comp A</Link> */}
        <button onClick={() => {
            navigate("/a")
        }}>Comp A</button>
        <br />
        {/* <a href='/b' > COMP B</a> */}
        {/* <Link to={'https://google.com'}>Comp B</Link> */}
        <button onClick={() => {
            navigate("/b")
        }}>Comp B</button>

    </div>
  )
}

export default AnchorAndLink