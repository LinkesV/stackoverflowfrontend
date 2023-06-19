import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { data } from '../App';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setDetails } from '../store/userSlice';

function Userlogin() {

    const dispatch = useDispatch()
    const [loggedinuser,setUser] = useContext(data)
    const navigate = useNavigate()
    const [email,setEmail] = useState('');
    const [psw,setPsw] =  useState('');

    const submitHandler =  async () => {
        try{
            await fetch("http://localhost:4000/login", {
                      method: "POST", 
                      headers: {
                          'Access-Control-Allow-Origin':true,
                          'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        email:email,
                        password:psw,
                      })
                  })
                  .then((res)=>{
                      return res.json()
                  }).then((res)=>{
                     if(res.fname == undefined){
                        alert('Login Credentials are incorrect')
                     }
                     else{
                      dispatch(setDetails({
                        fname:res.fname,
                        lname:res.lname,
                        email:res.email,
                        aboutme:res.aboutme,
                        questions:res.questions,
                        votes:res.votes
                      }))
                        navigate('/home')

                     }
                  })
          }
        catch(err){
          console.log(err)
        }
    }

    
    
    

  return (
    <div>
        <label>Email: </label><br></br>
        <input type="email" placeholder="Enter Email" name="email" required onChange={(e)=>{setEmail(e.target.value)}}/><br></br>
        <label>Password:                 <span><Link to='/resetpsw'>Forgot Password?</Link></span> </label><br></br>
         <input type="password" placeholder="Enter Password" name="psw" required onChange={(e)=>{setPsw(e.target.value)}}/><br></br>
         <button type="submit" onClick={submitHandler}>Login</button>

         <div>
            <p>Dont have an acount? <Link to='/signup'>Sign Up</Link></p>
         </div>
    </div>
  )
}

export default Userlogin