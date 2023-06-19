import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { data } from '../App'
import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { setDetails } from '../store/userSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function TopQuestions() {
    const [loggedinuser,setUser] = useContext(data)
    const [questions,setQuestions] = useState([])
    const [searchinput, setSearchinput] = useState()
    const [searchby, setSearchby] = useState("question")
    const [filteredquestions,setFilteredQuestions] = useState([])
    
    const dispatch = useDispatch

  
    try{
         useEffect(()=>{
            fetch("http://localhost:4000/getallquestions", {
                  method: "GET", 
                  headers: {
                      'Access-Control-Allow-Origin':true,
                      'Content-Type': 'application/json',
                  },
              })
              .then((res)=>{
                  return res.json()
              }).then((res)=>{
                setQuestions(res)
                setFilteredQuestions(res)
              })
         }, [])
      }
    catch(err){
      console.log(err)
    }
    
      
        
    
    
    const searchBar =  () => {
        if(searchinput.length > 0){
            if(searchby == "question"){
                let x = (questions.filter((question) => {
                    return question.ques.toUpperCase().match(searchinput.toUpperCase())
                }))
                setFilteredQuestions(x)
            }
            if(searchby == "tag"){
                let y = []
                questions.map((question,index)=>{
                    let z = question.tag.filter((c)=>{
                        return c.toUpperCase().match(searchinput.toUpperCase())
                    })
                    if(z.length > 0){
                        y = [...y, questions[index]]
                    }
                })

                setFilteredQuestions(y)
            }
            
        }
        
    }
    

  return (
    <div>
        <h1>Top Questions</h1>
        <div>
            <select id="dropsearch" name="cars" onChange={(e)=>{setSearchby(e.target.value)}}>
                <option value="question">Search by Question</option>
                <option value="tag">Search by Tag</option>
            </select>
            <input type='text' placeholder='Search Questions' onChange={(e)=>{setSearchinput(e.target.value)}}/>
            <button type='submit' onClick={searchBar}> Search</button>
        </div>
        <div>
            {filteredquestions.map((question)=>{
                return(
                    <Link to={`/question/${question._id}`}>
                        <div key={question._id}>
                        <div>
                            <div>Votes: {question.votes}</div>
                            <div>Answers: {question.answers.length}</div>
                            <div>Views: {question.views}</div>
                        </div>
                        <div>
                            <div>{question.ques}</div>
                            <div>{question.tag.map((tag)=>{
                                return(<div>{tag}</div>)
                            })
                            }</div>
                        </div>
                        <br></br>
                    </div>
                    </Link>
                    
                )
            })}
        </div>
    </div>
  )
}

export default TopQuestions