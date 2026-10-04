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
                            'Full Stack Developer',
                            'Software Developer | Front End & Full Stack'
                        ]}
                        multiTextDelay={1000}
                        typeSpeed={40}
                        hideCursorAfterText={true}
                    />
                </h2>
                <br></br>
                <h2 className='title'>
                    I build software that people can rely on.
                </h2>
                <br></br>
                <h3 className='brand-statement'>I'm a full-stack Software Engineer at Siemens, building features for an enterprise healthcare platform with C#/.NET, Vue, and TypeScript. 
                    I care about software that truly reaches people, which means making it accessible, easy to use, and stable enough that nobody has to think twice about it. 
                    Knowing that the code I write supports people in healthcare is a big part of why I do this work.</h3>
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