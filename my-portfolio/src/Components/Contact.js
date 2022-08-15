import React from 'react'
import { motion } from "framer-motion"


function Contact() {
  return (
    <motion.div className='contact' id='contact'
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <h2 className='contact-title'>Contact</h2>
      <br></br>

      <h3 className='about-text'>
        My inbox is always open. Let's get in touch!
      </h3>
      <br></br>
      <div className='contact-links'>
        <h3><a className='email' href='mailto:charnayegrier@gmail.com'>Email me</a></h3>
        <h3><a className='phone' href='tel:6785760005'>Call me</a></h3>
      </div>
    </motion.div>
  )
}

export default Contact