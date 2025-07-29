import { useState } from 'react'
import './LoginSignUP.css'
//here we import our assets js file 
import { assets } from './../../assets/assets';


//create a event listner
function Click_Button(){
  alert("Forgot Password Successfully")
  prompt("Set a new Password")
}

const LoginSignUP = () => {
  //here we will create useState()
  const [action, SetAction] = useState("Sign UP")
  return (
    <div className='Container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>

        <div className='inputs'>
          {
          action === "Login" ? <div></div> :<div className='input'>
            <img src={assets.user_icon} alt=''/>
            <input type='text' placeholder='Name'/>
          </div> 
          }

           <div className='input'>
            <img src={assets.email_icon} alt=''/>
            <input type='email' placeholder='Email'/>
          </div>

           <div className='input'>
            <img src={assets.password_icon} alt=''/>
            <input type='password' placeholder='Password'/>
          </div>
        </div>
        
        {
        action === "Sign UP" ? <div></div> :
        <div className='forgot-password'>Lost Password? <span onClick={Click_Button}> Click Here!</span></div> 
        }

        <div className='Submit-container'>
          <div className={action === "Login" ? "Submit gray" : "Submit"} onClick={() => {SetAction("Sign UP")}}>Sign UP</div>
          <div className={action === "Sign UP" ? "Submit gary": "Submit"} onClick={() => {SetAction("Login")}} >Login</div>
        </div>
    </div>
  )
}

export default LoginSignUP