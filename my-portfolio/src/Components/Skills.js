import React from 'react'
import { motion } from "framer-motion"
import reactskill from '../assets/images/icons8-react-native-color.svg'

function Skills() {
  return (
    <div className='banner'>
      <div>
        <h2 className='title'>
          Skills
        </h2>
      </div>
      <div className='skills-container'>
        <motion.div className='skills'
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <motion.div
            // animate={{ scale: 1 }}
            initial={{scale: 1}}
          whileHover={{scale: 1.5}}
          className='skill-item'
          >
            <img src={reactskill} alt='' className='react-skill'></img>
            <p className='skill-text'>React</p></motion.div>
        </motion.div>

      </div>

    </div>
  )
}

export default Skills