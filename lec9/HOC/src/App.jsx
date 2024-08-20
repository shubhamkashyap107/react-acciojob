import React from 'react'
import { Dashboard, Profile } from './Components/Comps'
import { withAuth } from './Components/HOC'


const AuthenticatedProfile = withAuth(Profile)
const AuthenticatedDashboard = withAuth(Dashboard)

const App = () => {


  return (
    <div>
      <AuthenticatedDashboard isAuthenticated={"kjjbsdvjbj"} />
      <AuthenticatedProfile isAuthenticated={true}  />
    </div>
  )
}

export default App




// HOC are a pattern in react that allows u to reuse a logic across multiple components
// A HOC is a component which takes a component as an arguement and returns a new comp with enhanced or additional functionality