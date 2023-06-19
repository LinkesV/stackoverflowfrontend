import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
 function Viewquestion() {
    const id = useParams()
    const userDetails = useSelector((state)=>{return state.firstname})
    const [question,setQuestion] = useState({});
    const [comment, setComment] = useState('');
    try{
         useEffect(()=>{
            fetch('http://localhost:4000/getquestions/'+id.id, {
                 method: "GET", 
                 headers: {
                     'Access-Control-Allow-Origin':true,
                     'Content-Type': 'application/json',
                 },
             })
             .then((res)=>{
                  return res.json()
             }).then((res)=>{
                // console.log(res)
                setQuestion(res)
                // console.log(question)
             })
        }, [question])
     }
   catch(err){
     console.log(err)
   }

   const commentHandler =  async () =>  {
    
    try{
          await fetch("http://localhost:4000/addcomment", {
                    method: "PUT", 
                    headers: {
                        'Access-Control-Allow-Origin':true,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        answers:[...question.answers,[userDetails,comment]],
                        id: id.id
                    })
                })
                .then((res)=>{
                    return res.json()
                }).then((res)=>{
                    // console.log(res)

                })
    }
    catch(err){
        console.log(err)
    }
}


 
  return (
    <div>
        <div key={question._id}>
                        <div>
                            <div>Votes: {question.votes}</div>
                            <div>Views: {question.views}</div>
                        </div>
                        <div>
                        {question.tag !== undefined && question.tag.map((tag)=>{
                         return(
                            <div>
                                {tag}
                            </div>
                            )
                    })
                }
                            <div>{question.ques}</div>

                            <div>
                                {question.para}
                            </div>
                        </div>
        </div>

        <div>
            <p>Comments:</p>
            <div>
                <input type='text' placeholder='Comment Here' defaultValue='' onChange={(e)=>{setComment(e.target.value)}}/>
                <button type='submit' onClick={commentHandler}>Comment</button>
            </div>
            <div>
                {question.answers}
            </div>
           
        </div>
    </div>
  )
}

export default Viewquestion