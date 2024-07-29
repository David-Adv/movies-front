import React, { useState } from 'react'
import "./login.css"
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

export const Login = () => {

const [action,setAction] = useState('')

const registerLink = () =>{
  setAction('active')

}

const loginLink = () =>{
  setAction('')

}


  return (
   <div className='form-container'>
      
      <div className={`wrapper ${action}`}>
          <div className='form-box login'>
            <form action="">
              <h1>Login</h1>

              <div className="input-box">
                <input type="text" placeholder='UserName' required/>
                <FaUser className='icon'/>
              </div>

              <div className="input-box">
                <input type="password" placeholder='Password' required/>
                <FaLock className='icon'/>
              </div>

              <div className="remember-forgot">
                  <label >
                    <input type="checkbox" />Remember me
                  </label>
                  <a href="#">Forgot password?</a>
              </div>

              <button type='submit'>Login</button>

              <div className="register-link">
                <p>Don't have an account? 
                  <a href="#" onClick={e =>{e.preventDefault(),registerLink()}}>Register</a>
                  </p>
              </div>

            </form>
          </div>



          <div className='form-box register'>
            <form action="">
              <h1>registration</h1>

              <div className="input-box">
                <input type="text" placeholder='UserName' required/>
                <FaUser className='icon'/>
              </div>

              <div className="input-box">
                <input type="email" placeholder='Email' required/>
                <FaEnvelope className='icon'/>
              </div>

              <div className="input-box">
                <input type="password" placeholder='Password' required/>
                <FaLock className='icon'/>
              </div>

              {/* <div className="remember-forgot">
                  <label >
                    <input type="checkbox" />Remember me
                  </label>
                  <a href="#">Forgot password?</a>
              </div> */}

              <button type='submit'>Register</button>

              <div className="register-link">
                <p>Already have an account <a href="#" onClick={ e =>{e.preventDefault(),loginLink()}}>Login</a></p>
              </div>

            </form>
          </div>

      </div>



 </div> 
  )
}
