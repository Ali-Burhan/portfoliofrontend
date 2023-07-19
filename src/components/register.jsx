import React, { createContext, useEffect, useState } from 'react'
import  "bootstrap/dist/css/bootstrap.min.css"
import AOS from "aos/dist/aos"
import form from "./images/forms.svg"
import "./register.css"
import {useNavigate} from "react-router-dom"
import TypingEffect from './typingeffect'
const Register = () => {
  const [formData,setFormData] = useState({firstname:"",lastname:"",email:"",password:"",confirmpassword:""});
  const [error,setError] = useState(false);
  const navigate = useNavigate();
  useEffect(()=>{
    AOS.init();  
  },[])
const handleChange = (e) => {
  setFormData({...formData,[e.target.name]:e.target.value});
  console.log(formData);
}
  const handleSubmit = async (e)=>{
e.preventDefault();
let headersList = {
  // "Accept": "*/*",
  "Content-Type": "application/json"
 }
 const {firstname,lastname,email,password,confirmpassword} = formData;
 let bodyContent = JSON.stringify({
  firstname,lastname,email,password,confirmpassword
 });
 
 let response = await fetch("http://localhost:8000/register", { 
   method: "POST",
   body: bodyContent,
   headers: headersList
 });
 if(!response.ok){
  setError(true)
 }
 else{
   let data = await response.json();
   console.log(data);
   setError(false)
   navigate("/");
  }

  }
  return (
    <>
        <div className='container-fluid'>
            <div className='row'>
                <div style={{height:"87vh"}} className='col-md-6 bgmain'>
                  <img data-aos="zoom-in-right" src={form} style={{height:"100%",width:"100%"}}/>
                </div>
                <div style={{width:"35%"}} className='signborder col-md-6 m-auto '>
                  <div className='row radius my-3'>
                 <h4 data-aos="fade-left" className='text-center maincolor sign'>SIGNUP</h4>
                    <div className='col-md-6'>
                    <input name='firstname' value={formData.firstname} onChange={handleChange} placeholder='Enter your First name'/>
                    </div>
                    <div className='col-md-6'>
                 
                  <input name='lastname' value={formData.lastname} onChange={handleChange} placeholder='Enter your Last name'/>
                    </div>
                  </div>
                
                  <input name='email' value={formData.email} onChange={handleChange} type='email' placeholder='Enter your Email'/>
                  <br/>
                  <br/>
                
                  <input name='password' value={formData.password} onChange={handleChange} type='password' placeholder='Enter your Password'/>
                  <br/>
                  <br/>
                  
                  <input name='confirmpassword' value={formData.confirmpassword} onChange={handleChange} type='password' placeholder='Confirm password'/>
                  <button onClick={handleSubmit} style={{width:"100%"}} className='btn btn-outline-secondary my-4'><TypingEffect text={'Reegister'} speed={100}/></button>
                  {error && <p>USER ALREADY PRESENT OR FILL PROPERLY</p>}
                  <p>Already have an account? <span style={{color:"blue",cursor:"pointer"}} >Sign in</span></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register