import React from 'react'
import Questionsuser from '../components/Questionsuser'
import Navigation from '../components/Navigation'
import Profile from '../components/Profile'

function UserProfile() {
  return (
    <div>
        <Navigation/>
        <Profile/>
        <Questionsuser/>
    </div>
  )
}

export default UserProfile