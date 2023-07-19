import React, { useEffect, useState } from 'react'
import "./hirene.css"
import hire from "./images/hireme.svg"
import address from "./images/address.svg"
import hireback from "./images/hirebackground.svg"
import { FaAddressCard,FaPhone,FaFacebookMessenger } from "react-icons/fa"  
import AOS from "aos/dist/aos"
import TypingEffect from "./typingeffect"
const Hireme = () => {
  const [messageData, setMessageData] = useState({email:"",phone:"",message:""});
  const [error,setError] = useState(false);
  const [user,setUser] = useState(false)
  useEffect(()=>{
    AOS.init();
  },[])
const handleChange = (e) => {
  setMessageData({...messageData,[e.target.name]:e.target.value});
}
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const {email,phone,message} = messageData;
    let headersList = {
      
      "Content-Type": "application/json"
     }
     
     let bodyContent = JSON.stringify({
      email,phone,message
     });
     
     let response = await fetch("http://localhost:8000/message", { 
       method: "POST",
       body: bodyContent,
       headers: headersList
     });
     if(!response.ok){
      setError(true)
      setUser(false)
     }else{
       let data = await response.json();
       console.log(data);
       setError(false)
       setUser(true);
      }
     
  }
  return (
    <>
    <div className='container-fluid body'>
        <div className='row '>
          <h1 data-aos="fade-in" duration="3000" className='text-white text-center'>Get in Touch</h1>
          <hr className='text-white'/>
          {/* <hr/> */}
            <div className='col-lg-3'>
                <img data-aos = "fade-out" className='rounded d-none d-sm-none d-md-block d-lg-block'  src={hire} width={"95%"} height={"100%"}/>
                </div>
            <div data-aos="zoom-in-right" className='text-white col-lg-4 bgleft'>
              <span> <FaAddressCard className='text-white'/> :</span> <TypingEffect text={'Dera Bhattiyan FSD road'} speed={50}/> <span>Sheikhupura</span>
              <br/>
              <br/>
              <span> <FaPhone className='text-white my-2'/> :</span> <span> <TypingEffect text={'+92-316-1499-488 '} speed={50}/></span>
              <br/>
              <br/>
              <span> <FaFacebookMessenger className='text-white my-2'/></span> <span>aliburhan42000@gmail.com</span>
              <br/>
              <img src={address} className='rounded d-none d-sm-none d-md-block d-lg-block' height={"300rem"}/>
            </div>
            <div data-aos="fade-out" className='text-center box  rounded col-lg-5'>
              <div className='row '>
              <form>
  <div className="form-group">
    {error && <h6 className='text-white'>PLEASE PROVIDE ALL DETAIL</h6>}
    {user && <h6 className='text-white'>Message Sent Successfuly</h6>}
    <label className='text-white ' htmlFor="exampleFormControlInput1">Email address</label>
    <input name='email' value={messageData.email} onChange={handleChange} type="email" style={{background:"#00203fff"}}  className="text-white form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div className="form-group">
    <label className='text-white ' htmlFor="exampleFormControlInput1">Phone Number</label>
    <input name='phone' value={messageData.phone} onChange={handleChange} type="text" style={{background:"#00203fff"}} className="form-control text-white " id="exampleFormControlInput1" placeholder="03xx-xxxx-xxx"/>
  </div>

  <div className="form-group">
    <label className='text-white ' htmlFor="exampleFormControlTextarea1">Example textarea</label>
    <textarea name='message' value={messageData.message} onChange={handleChange} style={{height:"15rem",background:"#00203fff"}}  className="form-control text-white " id="exampleFormControlTextarea1" rows="3" placeholder='Enter your message'></textarea>
  </div>
  <button type="submit" style={{width:"100%"}} onClick={handleSubmit} className="btn btn-outline-secondary my-1 text-white">Submit</button>
</form>
{/* <div class="container">
    <h1>Contact Us</h1>
    <form>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea class="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div> */}
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hireme