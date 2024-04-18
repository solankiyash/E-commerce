import React from 'react'
import "./CSS/LoginRegister.css"
function LoginRegister() {
  return (
    <div className='loginsingup'>
        <div className="loginsinup-container">
          <h1>Sing Up</h1>
          <div className="loginsingup-fileds">
            <input type="text" placeholder='Your Name'/>
            <input type="email" placeholder='Your Email'/>
            <input type="password" placeholder='Password'/>
          </div>
          <button>Continue</button>
          <p className="loginsinup-login">
            Already have an account <span>Login</span>
          </p>
          <div className="loginsingup-agree">
            <input type="checkbox" name='' id=''/>
            <p>By continuing, i agree to the terms of use & privacy policy</p>
          </div>
        </div>
      
    </div>
  )
}

export default LoginRegister
