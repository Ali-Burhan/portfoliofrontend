import React from 'react'
import {Link} from "react-router-dom"
import "./error.css"
import error from "./images/error.svg"
const Error = () => {
  return (
    <>
    <div className='body1 container-fluid'>
        <div className='row'>
            <div className='col-9 main text-center'>
                <img style={{height:"40%"}} src={error}/>
                <hr/>
                <h1 className='text-black'>PAGE NOT FOUND</h1>
                <Link to={'/'} className='btn btn-outline-info' style={{width:"100%"}}>Go Home</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Error