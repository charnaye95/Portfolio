import React from 'react'
import therapyready from '../assets/images/therapyready.netlify.app_.png'
import align from '../assets/images/peaceful-sunshine-1cdc44.netlify.app_home.png'

function Projects() {
  return (
    <div className='banner'>
      <div>
        <h2 className='title'>
          Projects
        </h2>
      </div>
      <div className='project-list'>
        <div className='project1'>
          <div className='project-item'>
            <div className='browser'>
              <div className='circle1'></div>
              <div className='circle2'></div>
              <div className='circle3'></div>
              <p className='project-title'>TherapyReady</p>
            </div>
            <a href='https://therapyready.netlify.app/' target='_blank' rel='noreferrer' className='project-link'><img src={therapyready} alt='therapyready homepage'></img></a>
          </div>
          {/* <p className='project-title'>TherapyReady</p> */}
          <a href='https://github.com/charnaye95/TherapyReady-Frontend' className='project-github'>Github</a>
          <p className='project-description'>test descript</p>
        </div>

        <br></br>

        <div className='project2'>
          <div className='project-item'>
            <div className='browser'>
              <div className='circle1'></div>
              <div className='circle2'></div>
              <div className='circle3'></div>
              <p className='project-title'>Align</p>
            </div>
            <a href='https://peaceful-sunshine-1cdc44.netlify.app/' target='_blank' rel='noreferrer' className='project-link'><img src={align} alt='align homepage'></img></a>
          </div>
          {/* <p className='project-title'>TherapyReady</p> */}
          <a href='https://github.com/aschweik766/breakfast-club-FrontEnd' className='project-github'>Github</a>
          <p className='project-description'>test descript</p>
        </div>

        <br></br>

        <div className='project3'>
          <div className='project-item'>
            <div className='browser'>
              <div className='circle1'></div>
              <div className='circle2'></div>
              <div className='circle3'></div>
              <p className='project-title'>TherapyReady</p>
            </div>
            <a href='https://therapyready.netlify.app/' target='_blank' rel='noreferrer' className='project-link'><img src={therapyready} alt='draftday homepage'></img></a>
          </div>
          {/* <p className='project-title'>TherapyReady</p> */}
          <a href='' className='project-github'>Github</a>
          <p className='project-description'>test descript</p>
        </div>

        <br></br>
        <div className='project4'>
          <div className='project-item'>
            <div className='browser'>
              <div className='circle1'></div>
              <div className='circle2'></div>
              <div className='circle3'></div>
              <p className='project-title'>TherapyReady</p>
            </div>
            <a href='https://therapyready.netlify.app/' target='_blank' rel='noreferrer' className='project-link'><img src={therapyready} alt='movie madness homepage'></img></a>
          </div>
          {/* <p className='project-title'>TherapyReady</p> */}
          <a href='' className='project-github'>Github</a>
          <p className='project-description'>test descript</p>
        </div>
      </div>

    </div>
  )
}

export default Projects