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
        <h3>
          I build software that holds up. As a Software Engineer at Siemens, I develop full-stack features for an enterprise healthcare platform, and much of my work centers on new features that drive the business forward. The features I've built have helped generate new revenue, keep existing clients invested in the product, and attract new ones. I've also resolved hundreds of high-priority production issues so the platform stays stable for the people who rely on it.
        </h3>
        <br></br>
        <h3>
          I work across C#/.NET on the backend and Vue and TypeScript on the frontend, and I use AI tools like Claude Code and GitHub Copilot every day while reviewing every change against our standards for security and quality.
        </h3>
        <br></br>
        <h3>
          Before engineering, I studied Communications and worked as a Technical Account Manager at Publicis Groupe. That experience is why I'm comfortable working closely with product, QA, and stakeholders, and why I always think about the people on the other end of the software.       
        </h3>
        <h3>
          Outside of work, I love spending time with family and friends, binge-watching movies and shows, and exploring new cities.
        </h3>
      </div>

    </motion.div>
  )
}

export default About