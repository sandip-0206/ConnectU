import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import { useState } from 'react'

const Auth = () => {

  const [isSignUp, setIsSignUp] = useState(false)
  
  const [data, setData] = useState({firstname: "", lasname: "", password: "", confirmpass: "", username: ""})


  const handleChange = (e)=> {
    setData({...data, [e.target.name]: e.target.value })
  }
  return (
    <div className='Auth'>
      {/* left side */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Sandip Sharma</h1>
          <h6>Explore the idea thoughout the world.</h6>
        </div>  
      </div>

      {/* right side */}
      <div className="a-right">
      <form className="infoForm authForm">
         <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>
     
      
         

         {isSignUp &&

       <div>

        <input 
              type="text" 
              className="infoInput" 
              name='username'
              placeholder='First Name'
              onChange={handleChange}
              />
      
      <input type="text" 
             className="infoInput" 
             name='password'
             placeholder='Last Name'
             onChange={handleChange}
             />

        </div>}
        
      <div>
        <input type="text" 
        className="infoInput" 
        name='username'
        placeholder='Username'
        onChange={handleChange}
        />
      </div>
      <div>
      <input type="text" 
        className="infoInput" 
        name='password'
        placeholder='Password'
        onChange={handleChange}
        />

        {isSignUp &&  <input 
              type="text" 
              className="infoInput" 
              name='confirmpass'
              placeholder='Confirm Password'
              onChange={handleChange}
              />}
      </div>

      <div className='call'>
        <span style={{fontSize:'12px', cursor: "pointer"}} onClick = {()=>setIsSignUp((prev)=>!prev)} >
          {isSignUp ? "Already have an account. Login!" : "Don't have an aacount ? Sign Up"}
          </span>
      </div>
      <button className="button infoButton" type='submit'>
        {isSignUp ? "Sign Up" : "Login" }
        </button> 
      </form>
    </div>
      {/* <SignUp /> */}
    </div>
  )
}
export default Auth