import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Reset() {
    const [email,setEmail] = useState('');
    const [psw,setPsw] =  useState('');
    const [cfmpsw,setCfmpsw] =  useState('');
    const pswchecker =  new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    const navigate = useNavigate()
    let result = true

    const submitHandler = async ()=>{
        try{
          if(!/\S+@\S+\.\S+/.test(email)){
            alert("Please enter a valid email")
            result = false
          }
    
          if(!pswchecker.test(psw)){
            alert("Password must have minimum eight characters, at least one captial letter,at least one captial letter, one number and one special character:")
            result = false
            
        }
          if(psw !== cfmpsw){
            alert("Passwords do not match")
            result = false

          }
          if(result){
            await fetch("http://localhost:4000/reset", {
                    method: "PUT", 
                    headers: {
                        'Access-Control-Allow-Origin':true,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      email:email,
                      newpassword:psw,
                    })
                })
                .then((res)=>{
                    return res.json()
                }).then((res)=>{
                    if(res){
                        alert(res.message)
                    }
                    else{
                        alert('Email not found.Please try again')
                    }
                })
          }
        }
      catch(err){
        console.log(err)
      }
    
      }
  return (
    <div>

        <label>Email: </label><br></br>
        <input type="email" placeholder="Enter Email" name="email" required onChange={(e)=>{setEmail(e.target.value)}}/><br></br>

        <label>Password: </label><br></br>
         <input type="password" placeholder="Enter Password" name="psw" required onChange={(e)=>{setPsw(e.target.value)}}/><br></br>
         
        <label>Confirm Password: </label><br></br>

        <input type="text" placeholder="Detials about yourself" name="about" required onChange={(e)=>{setCfmpsw(e.target.value)}}/><br></br>
        <button type="submit" onClick={submitHandler}>Reset Password</button>
         
    </div>
  )
}

export default Reset