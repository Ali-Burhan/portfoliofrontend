import React, { useEffect, useRef, useState } from 'react'
import "bootstrap/dist/js/bootstrap"

import "./view.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaAtom, FaAmazon, FaRobot } from "react-icons/fa"
import aliPic from "./images/Ali.svg"
import TypingEffect from './typingeffect';
import ProgressBar from './progerss';
import study from "./images/study.svg"
import skills from "./images/skills.svg"
import mern from "./images/mern.svg"
import amazon from "./images/amazon.svg"
import machine from "./images/machine.svg"
import { Link } from 'react-router-dom';
const View = () => {
  const [loading , setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    AOS.init();
  }, [])
  return (
    <>
    {
      <div className='container-fluid body1' >

        <div className='row '>
          <div className=' col-md-5 white ' >
            <h2 data-aos="zoom-out" >Hey There!</h2>
            <TypingEffect speed={"25"} text={"I  am Ali Burhan, a skilled programmer with a passion for problem-solving and creating efficient code. Dedicated to continuous learning and delivering high-quality software solutions."} />
            <p></p>
            <Link to={"/hire"} className='btn wid btn-outline-primary'>HIRE ME</Link>
            <h3 data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className='my-4'>Main Skills</h3>
            <p className='my-2' data-aos="fade-out">MERN <FaAtom className='' /></p>

            <ProgressBar progress={90} duration={20} bg={'skyblue'} />
            <p className='my-2'>AMAZON VA <FaAmazon /></p>
            <ProgressBar progress={85} duration={20} bg={'#008080'} />
            <p className='my-2'>MACHINE LEARNING <FaRobot /></p>
            <ProgressBar progress={50} duration={20} bg={'#800080'} />
          </div>
          <div className='col-md-1 d-none d-sm-block d-md-block d-lg-block mx-4 bord'></div>
          <div className='col-md-4 text-center pic'>
            <img data-aos = "zoom-out" src={aliPic} style={{ height: "80%" }} className='rounded d-none d-sm-block d-md-block d-lg-block text-center' />
        <hr width={425}/>
          </div>
          <hr/>
        </div>
        <h1 data-aos="fade-out" className='text-center'>EDUCATION</h1>
        <hr/>
        <div className='row bg-white txt'>
          <div className='col-md-3 py-4 bg'>
            <img data-aos="zoom-out center" className='d-none d-sm-block d-md-block d-lg-block' src={study} width={"100%"} height={'100%'}/>
          </div>
          <div className='col-md-4 rd  education-container'>
            <div data-aos="fade-up" className="education-item ">
              <h3 className="education-title">NFC IEFR</h3>
              <p className="education-date">2020 - onward</p>
              <p className="education-degree">Bachelor's Degree in Computer Science</p>
              <p className="education-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla mauris non elit
                consequat, ut aliquet lorem tincidunt. Nulla facilisi. Donec in lectus eu urna aliquam
                vestibulum.
              </p>
            </div>
          </div>
          <div className='col-md-5 education-container'>

            <div data-aos="fade-down" className="education-item">
              <h3 className="education-title">Aspire Group of Colleges</h3>
              <p className="education-date">2018 - 2020</p>
              <p className="education-degree">Fsc pre-engineering</p>
              <p className="education-description">
                Sed ullamcorper, arcu non rhoncus congue, turpis sem convallis elit, vel aliquet metus
                velit sed ipsum. Aenean efficitur mauris sit amet urna volutpat, nec vestibulum justo
                lobortis.
              </p>
            </div>
          </div>
        </div>
          <hr/>
        <h3 data-aos="zoom-in" id='skills' className='text-center my-4'>TECHNOLOGY</h3>
        <hr/>
<div className='my-4 technology row'>
   <div data-aos = "fade-down-right" className=' col-md-4 mb-4'>
   <center>

   <div className="card" style={{width: "18rem"}}>
  <img src={mern} style={{backgroundColor:"#00203fff"}} height={200} className="card-img-top" alt="..."/>
  <div className="card-body text-black">
    <h5 className="card-title">MERN STACK</h5>
    <p className="card-text">The MERN stack is a popular web development stack consisting of MongoDB, Express.js, React.js, and Node.js, used for building full-stack JavaScript applications.</p>
    <a href="#" className="btn btn-outline-primary">VISIT</a>
  </div>
</div>
</center>
    </div>
    <div data-aos="fade-down" className='col-md-4 mb-4'>
      <center>

    <div className="card" style={{width: "18rem"}}>
  <img src={amazon} className="card-img-top" height={200} style={{backgroundColor:"#00203fff"}} alt="..."/>
  <div className="card-body text-black">
    <h5 className="card-title">AMAZON VA</h5>
    <p className="card-text">"Amazon VA, short for Amazon Virtual Assistant, provides virtual support and assistance for various tasks, improving efficiency and productivity.</p>
    <a href="#" className="btn btn-outline-primary">VISIT</a>
  </div>
</div>
      </center>
    </div>
    <div data-aos="fade-down-left" className='col-md-4'>
      <center>

    <div className="card" style={{width: "18rem"}}>
  <img src={machine} style={{backgroundColor:"#00203fff"}} height={200} className="card-img-top" alt="..."/>
  <div className="card-body text-black">
    <h5 className="card-title">MACHINE LEARNING</h5>
    <p className="card-text">"Machine learning is a field of artificial intelligence that uses algorithms to enable computers to learn from data and make predictions or decisions."</p>
    <a href="#" className="btn btn-outline-primary">VISIT</a>
  </div>
</div>
      </center>
    </div>
</div>

<hr />
      </div>

}
    </>
  )
}

export default View