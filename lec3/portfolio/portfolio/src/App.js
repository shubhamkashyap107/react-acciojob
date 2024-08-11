import React from 'react'
import ComponentA from './Components/ComponentA'
import 'semantic-ui-css/semantic.min.css'
import ComponentB from './Components/ComponentB'
import ComponentC from './Components/ComponentC'
import ComponentD from './Components/ComponentD'

const App = () => {
  return (
    <div style={{display : "flex", flexDirection : "column", gap : "10px"}}>
      <ComponentA bg={"E3A5C7"} name={"Daku Mangal Singh"} designation={"Dacoit"} companyName={"Dholakpur Mountains"} src={"https://pbs.twimg.com/media/F_Hj8AebgAA7cMI.jpg"} />
      <ComponentB mainSkill={"Web Development"} secondSkill={"Data Structures and Algorithms"} thirdSkill={"Software Testing"} />
      <ComponentC bg={"E3A5C7"} proj1={"Ecommerce-Website"} proj2={"Youtube-Clone"} proj3={"Zomato-Clone"} />
      <ComponentD linkedin={"https://www.google.com"} leetcode={"https://www.google.com"} youtube={'https://www.google.com'}/>
    </div>
  )
}

export default App