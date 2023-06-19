import React from 'react'
import { useContext } from 'react'
import { data } from '../App'
import { useSelector } from 'react-redux';


function Profile() {
  const userDetails = useSelector((state)=>{return state})
    const [loggedinuser,] = useContext(data)
  return (
    <div>
        <h1>Your Details</h1>
        <div>First Name: {userDetails.firstname}</div>
        <div>Last Name: {userDetails.lastname}</div>
        <div>Email: {userDetails.email}</div>
        <div>About Me: {userDetails.aboutme}</div>
    </div>
  )
}

export default Profile