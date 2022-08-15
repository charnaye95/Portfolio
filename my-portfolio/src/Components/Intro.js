import React from 'react'
import profile from '../assets/images/profile.jpeg'
import TypeWriterEffect from 'react-typewriter-effect';
import { motion } from "framer-motion"


function Intro() {

    return (
        <motion.div className='banner' id='home'
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}>
            <div className='intro-text'>
                <h3 className='hello'>Hello, my name is</h3>
                <h1 className='name-heading'>
                    Charnaye Grier
                </h1>
                <h2 className='title'>
                    <TypeWriterEffect
                        textStyle={{
                            fontFamily: 'Jost',
                            color: '#FFD447',
                            fontWeight: 700,
                            fontSize: '30px',
                        }}
                        startDelay={2000}
                        cursorColor="#FFD447"
                        multiText={[
                            'Software Developer',
                            'Front End Developer',
                            'Software Developer | Front End Developer',
                        ]}
                        multiTextDelay={1000}
                        typeSpeed={40}
                        hideCursorAfterText={true}
                    />
                </h2>
                <br></br>
                <h2 className='title'>
                    I create meaningful applications.
                </h2>
                <br></br>
                <h3 className='brand-statement'>I am a creative, design-minded, and user-driven software developer aiming to create meaningful applications that truly reach people and can add to someone’s life. Messaging and access to software for everyone is important to me and if even one application that I create is helpful to someone, I’ve made a difference.</h3>
            </div>
            <motion.div className='image-container'
                initial={{ scale: .9 }}
                whileHover={{ scale: 1.1 }}
            >
                <div className='img-card'>
                    <img src={profile} alt='profile of author' className='profile'></img>
                </div>

            </motion.div>
        </motion.div>
    )
}

export default Intro