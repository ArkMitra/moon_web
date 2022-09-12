import React from 'react'
import { Link } from 'react-router-dom'
import './MainContent.css'



const Video = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <h1>MOONQUAKE VISUALIZED</h1>
                <p>VISUALIZING THE MOON SINCE 1969</p>
                <div>
                    <Link to='/model' className='btn'>Model</Link>
                    <Link to='/about' className='btn btn-dark'>About Us</Link>
                </div>
            </div>
        </div>
    )
}

export default Video