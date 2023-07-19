import React from 'react'
// import facebook from "./images/facebok.svg"
import { FaFacebook,FaTwitter,FaWhatsapp,FaInstagram } from "react-icons/fa";
import "./view.css"
const Footer = () => {
    let d = new Date();
  return (
    <>
        <div className='bg text-white container-fluid '>
        <div className='row'>
        <div className='col-12 text-center '>
        {/* <img src={facebook}/> */}
        <FaFacebook className='mx-4' style={{cursor:"pointer"}} />
        <FaTwitter className='mx-4' style={{cursor:"pointer"}}/>
        <FaInstagram className='mx-4' style={{cursor:"pointer"}}/>
        <FaWhatsapp className='mx-4' style={{cursor:"pointer"}}/>
        <p>Copyright © {d.getFullYear()} - <a href="https://github.com/Ali-Burhan/mern" target='_blank'>Ali Burhan</a> </p>

        </div>
        </div>

            
        </div>
    </>
  )
}

export default Footer