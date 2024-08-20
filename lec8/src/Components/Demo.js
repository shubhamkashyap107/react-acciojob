import React, { useEffect, useState } from 'react'
import ChotaDiv from './ChotaDiv'

const Demo = () => {
    const[posts, setPosts] = useState([])


    useEffect(() => {
        const getData = async() => {
            const data = await fetch("https://jsonplaceholder.typicode.com/posts/")
            const json = await data.json()
            setPosts(json)
        }
        getData()
    }, [])

  return (
    <div style={{display : 'grid', gridTemplateColumns : "1fr 1fr 1fr", gap :"20px"}}>
            {posts.map((item) => {
                return <ChotaDiv key={item.id} title={item.title} body={item.body} />
            })}
    </div>
  )
}

export default Demo