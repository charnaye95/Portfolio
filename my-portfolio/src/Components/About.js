import React from 'react'
import { motion } from "framer-motion"


function About() {
  return (
    <motion.div className='banner' id='about'
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}>
      <div>
        <h2 className='title'>
          About Me
        </h2>
      </div>
      <div className='about-text'>
        <h3>Ever since I can remember, I had an interest in storytelling, creativity, and the art of communication. I've searched for ways in which I can express my love for it, and discovered I want to channel it to help people. That path led me to web development.  </h3>
        <br></br>
        <h3>
          As a developer, I enjoy problem-solving, the look and feel of an application, and how it’s working. My degree in Communications and time with General Assembly allows me to work efficiently in collaborative settings, and the ability to bring an audience’s perspective to coding. I care about the impact of an application and what it can do for its users.
        </h3>
        <br></br>
        <h3>
          In my free time, you can find me hanging out with family and friends, binge watching movie and shows, or exploring a new city.
        </h3>
      </div>

    </motion.div>
  )
}

export default About