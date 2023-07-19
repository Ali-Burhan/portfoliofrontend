import React, { useEffect } from 'react'
import skills from "./images/certificate.svg"
import code from "./images/coding.svg"
import AOS from "aos/dist/aos"

import mern from "./images/mern.svg"
import amazon from "./images/amazon.svg"
import machine from "./images/machine.svg"
import {FaQuoteLeft,FaQuoteRight} from "react-icons/fa"
import "./skill.css"
import ProgressBar from './progerss'
const Skills = () => {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <>
    <div className='container-fluid skillbody'>
        <div className='row'>
            <div className='col-12 d-none d-md-block d-lg-block'>
              <div className='row text-white'>
                <div className='col-2 mx-3'>
                <img data-aos="zoom-in"  height={200} src={skills}/>
                </div>
                <div className='col-6 my-5'>
                  <p data-aos="zoom-out"><FaQuoteLeft/> &nbsp;&nbsp;&nbsp;&nbsp; Skills are the valuable tools that empower individuals to navigate the complexities of life and work. They encompass a wide range of abilities, knowledge, and proficiencies acquired through education, training, and experience. Skills are not only crucial for personal growth but also play a vital role in professional success.&nbsp;&nbsp;&nbsp;&nbsp;<FaQuoteRight/> </p>
                </div>
                <div className='col-2'>
                <img data-aos="zoom-in"  height={200} src={code}/>
                </div>
              </div>
            </div>
            <hr className='text-white'/>
            <hr className='text-white'/>
              <h1 className='text-white text-center'>SKILLS</h1> 
            <div className='my-4 skillback technology row'>
              
   <div data-aos = "fade-down-right" className='mt-4 col-md-4 mb-4'>
   {/* <center> */}
   <div className="card" style={{width: "18rem"}}>
  <img src={mern} style={{backgroundColor:"#00203fff"}} height={200} className="card-img-top" alt="..."/>
  <div className="card-body text-black">
    <h5 className="card-title">MERN STACK</h5>
    <p className="card-text">The MERN stack is a popular web development stack consisting of MongoDB, Express.js, React.js, and Node.js, used for building full-stack JavaScript applications.</p>
    {/* <a href="#" className="btn btn-outline-primary">VISIT</a> */}
    <ProgressBar  progress={90} bg={'green'} duration={40}/>
  </div>
</div>
{/* </center> */}
    </div>
    <div data-aos="fade-down" className='col-md-4 mt-4 mb-4'>
      {/* <center> */}

    <div className="card" style={{width: "18rem"}}>
  <img src={amazon} className="card-img-top" height={200} style={{backgroundColor:"#00203fff"}} alt="..."/>
  <div className="card-body text-black">
    <h5 className="card-title">AMAZON VA</h5>
    <p className="card-text">"Amazon VA, short for Amazon Virtual Assistant, provides virtual support and assistance for various tasks, improving efficiency and productivity.</p>
    {/* <a href="#" className="btn btn-outline-primary">VISIT</a> */}
    <ProgressBar  progress={80} bg={'blue'} duration={40}/>
  </div>
</div>
      {/* </center> */}
    </div>
    <div data-aos="fade-down-left" className='col-md-4 mt-4'>
      {/* <center> */}

    <div className="card" style={{width: "18rem"}}>
  <img src={machine} style={{backgroundColor:"#00203fff"}} height={200} className="card-img-top" alt="..."/>
  <div className="card-body text-black">
    <h5 className="card-title">MACHINE LEARNING</h5>
    <p className="card-text">"Machine learning is a field of artificial intelligence that uses algorithms to enable computers to learn from data and make predictions or decisions."</p>
    {/* <a href="#" className="btn btn-outline-primary">VISIT</a> */}
    <ProgressBar  progress={40} bg={'skyblue'} duration={40}/>
  </div>
</div>
      {/* </center> */}
    </div>
</div>
            </div>
        </div>
    </>
  )
}

export default Skills