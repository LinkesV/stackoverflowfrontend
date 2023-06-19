import React from 'react'
import Navigation from '../components/Navigation'
import TopQuestions from '../components/TopQuestions'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <Navigation/>
      <TopQuestions/>
      <button type='submit' onClick={navigate('/userprofile')}>submit</button>
    </div>
  )
}

export default Home