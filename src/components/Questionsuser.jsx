import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import {data} from 'react'


function Questionsuser() {
    const navigate = useNavigate()
    const askquestionHandler = ()=>{
        navigate('/askquestion')
    }
  return (
    <div>
        <div>
            <button onClick={askquestionHandler}>Ask a question</button>
        </div>
    </div>
  )
}

export default Questionsuser