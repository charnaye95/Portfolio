import React from 'react'
import profile from '../assets/images/profile.jpeg'

function Intro() {
    return (
        <div className='banner'>
            <div>
            <h3 className='hello'>Hello, my name is</h3>
            <h1 className='name-heading'>
                Charnaye Grier
            </h1>
            <h2 className='title'>
                Software Developer | Front End Developer
            </h2>
            <br></br>
            <h2 className='title'>
                I create meaningful applications.
            </h2>
            <br></br>
            <h3 className='brand-statement'>I am a creative, design-minded, and user-driven software developer aiming to create meaningful applications that truly reach people and can add to someone’s life. As a developer, I enjoy problem-solving, the look and feel of an application, and how it’s working. My degree in Communications and time with General Assembly allows me to work efficiently in collaborative settings, and the ability to bring an audience’s perspective to coding. Messaging and access to software for everyone is important to me and if even one application that I create is helpful to someone, I’ve made a difference.</h3>
            </div>
            <div>
                <img src={profile} alt='profile of author' className='profile'></img>
            </div>
        </div>
    )
}

export default Intro