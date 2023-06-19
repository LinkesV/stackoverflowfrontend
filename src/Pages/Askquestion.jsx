import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Askquestion() {
  const navigate  = useNavigate()
  const [ques,setQues] = useState('')
  const [desc,setdesc] = useState('')
  const [tags,setTags] = useState([])

  const userName = useSelector((state)=>{return state.firstname})
  const email = useSelector((state)=>{return state.email})

  const arrques = useSelector((state)=>{return state.questions})
  const submitHandler = () => {
    if(ques.length <5 || desc.length <5){
      alert('Question length is too short. Please write a proper query')
    }
    else{
      try{
        fetch("http://localhost:4000/addquestion", {
                 method: "POST", 
                 headers: {
                     'Access-Control-Allow-Origin':true,
                     'Content-Type': 'application/json',
                 },
                 body: JSON.stringify({
                   ques: ques,
                   para: desc,
                   by:userName,
                   tag: tags,
                   
                 })
             })
             .then((res)=>{
                 return res.json()
             }).then((res)=>{
                console.log(res)
             })
     }
   catch(err){
     console.log(err)
   }
 
   try{
     fetch("http://localhost:4000/addquestiontouser", {
              method: "PUT", 
              headers: {
                  'Access-Control-Allow-Origin':true,
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: email,
                arrayofques:[...arrques,{ques: ques,
                 para: desc,
                 by:userName,
                 tag: tags,}],
              })
          })
          .then((res)=>{
              return res.json()
          }).then((res)=>{
             console.log(res)
          })
         }
     catch(err){
       console.log(err)
     }
 
   alert("Question has been added to the forum")
   navigate('/userprofile')
    }
  }


  
  return (
    <div>
      <label>Question: </label><br></br>
        <input type="text" placeholder="Enter Question" name="ques" required onChange={(e)=>{setQues(e.target.value)}}/><br></br>
        <label>Description: </label><br></br>
        <input type="text" placeholder="Elaborate on your question" name="fullques" required onChange={(e)=>{setdesc(e.target.value)}}/><br></br>
        <label>Tags: </label><br></br>
        <input type="text" placeholder="Add tags to your questions. Leave a space between the tags" name="tags" required onChange={(e)=>{setTags(e.target.value.split(' '))}}/><br></br>
        <button type='submit'onClick={submitHandler}>Submit Question</button>
    </div>
  )
}

export default Askquestion