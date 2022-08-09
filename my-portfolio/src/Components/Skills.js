import React from 'react'
import { motion } from "framer-motion"
import reactskill from '../assets/images/icons8-react-native-color.svg'
import jsskill from '../assets/images/icons8-javascript.svg'
import nodeskill from '../assets/images/icons8-node-js.svg'
import cssskill from '../assets/images/icons8-css3.svg'
import bootstrapskill from '../assets/images/icons8-bootstrap.svg'
import tailwindskill from '../assets/images/icons8-tailwindcss.svg'
import githubskill from '../assets/images/icons8-github.svg'
import pythonskill from '../assets/images/icons8-python.svg'
import djangoskill from '../assets/images/icons8-django.svg'
import postgresskill from '../assets/images/icons8-postgresql.svg'
import mongoskill from '../assets/images/icons8-mongodb-a-cross-platform-document-oriented-database-program-75.png'

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
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            className='skill-item'
          >
            <img src={reactskill} alt='' className='react-skill'></img>
            <p className='skill-text'>React</p></motion.div>
          <motion.div
            // animate={{ scale: 1 }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            className='skill-item'
          >
            <img src={jsskill} alt='' className='js-skill'></img>
            <p className='skill-text'>JavaScript</p></motion.div>
          <motion.div
            // animate={{ scale: 1 }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            className='skill-item'
          >
            <img src={nodeskill} alt='' className='node-skill'></img>
            <p className='skill-text'>Node.js</p></motion.div>
          <motion.div
            // animate={{ scale: 1 }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            className='skill-item'
          >
            <img src={cssskill} alt='' className='css-skill'></img>
            <p className='skill-text'>CSS</p></motion.div>
          <motion.div
            // animate={{ scale: 1 }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            className='skill-item'
          >
            <img src={bootstrapskill} alt='' className='bootstrap-skill'></img>
            <p className='skill-text'>Bootstrap</p></motion.div>
          <motion.div
            // animate={{ scale: 1 }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            className='skill-item'
          >
            <img src={tailwindskill} alt='' className='tailwind-skill'></img>
            <p className='skill-text'>Tailwind CSS</p></motion.div>
          <motion.div
            // animate={{ scale: 1 }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            className='skill-item'
          >
            <img src={githubskill} alt='' className='git-skill'></img>
            <p className='skill-text'>Github</p></motion.div>
          <motion.div
            // animate={{ scale: 1 }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            className='skill-item'
          >
            <img src={pythonskill} alt='' className='python-skill'></img>
            <p className='skill-text'>Python</p></motion.div>
          <motion.div
            // animate={{ scale: 1 }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            className='skill-item'
          >
            <img src={djangoskill} alt='' className='django-skill'></img>
            <p className='skill-text'>Django</p></motion.div>
          <motion.div
            // animate={{ scale: 1 }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            className='skill-item'
          >
            <img src={postgresskill} alt='' className='postgres-skill'></img>
            <p className='skill-text'>PostgreSQL</p></motion.div>
          <motion.div
            // animate={{ scale: 1 }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            className='skill-item'
          >
            <img src={mongoskill} alt='' className='mongo-skill'></img>
            <p className='skill-text'>MongoDB</p></motion.div>




        </motion.div>

      </div>

    </div>
  )
}

export default Skills