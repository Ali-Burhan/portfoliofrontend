import React from 'react'
import {FaHome,FaEnvelope,FaUser,FaBriefcase,FaProductHunt} from "react-icons/fa"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import "./home.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
        <div className="container-fluid body1">
            <div className="row py-2">
                <div className="col-">
                    <div className="row d-sm-none d-md-block d-lg-block d-none">
                        <div className="navbar col-12">
                            <ul>
                                <Link to={'/'} className='text-white mx-2 a'>BURHANSE</Link>
                                {/* <img src={logo2} height={90}/> */}
                            </ul>
                            <ul className='mx-5'>
                                <FaHome className='text-white a'/>
                                <Link to='/' className='text-white mx-2 a as'>HOME |</Link>
                                <FaUser className='text-white a'/>
                                <Link to='/skills' className='text-white mx-2 a'>SKILLS |</Link>
                                <FaBriefcase className='text-white a'/>
                                <Link to='/hire' className='mx-2 a text-white'>HIRE ME! |</Link>
                                <FaProductHunt className='text-white a'/>
                                <Link to='/Product' className='mx-2 a text-white'>PRODUCT |</Link>
                                <FaEnvelope className='text-white a'/>
                                <Link to='/signup' className='mx-2 a text-white'>Register</Link>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar col-12 d-sm-block d-md-none d-lg-none">
              <a href="/" className="text-white mx-2 a">
                LOGO
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link to="/" className="text-white mx-2 a">
                      <FaHome className="text-white" /> HOME
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/skills" className="text-white mx-2 a">
                      <FaUser className="text-white" /> SKILLS
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/hire" className="text-white mx-2 a">
                      <FaBriefcase className="text-white" /> HIRE ME!
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/product" className="text-white mx-2 a">
                      <FaProductHunt className="text-white" /> PRODUCT
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signup" className="text-white mx-2 a">
                      <FaEnvelope className="text-white" /> Register
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home

