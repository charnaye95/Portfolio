import React from 'react'
import therapyready from '../assets/images/therapyready.netlify.app_.png'
import align from '../assets/images/peaceful-sunshine-1cdc44.netlify.app_home.png'
import draftday from '../assets/images/polar-reef-72504.herokuapp.com_.png'
import moviemadness from '../assets/images/charnaye95.github.io_MovieMadness_.png'

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
          <a href='https://github.com/charnaye95/TherapyReady-Frontend' target='_blank' rel='noreferrer' className='project-github'>Github</a>
          <p className='project-description'><b>Django, React, Node.js, CSS, Tailwind CSS </b>
            <br></br>
            an application that features clinic and therapist information transparently and health questionnaires as a resource for users to access. Search functionality is included where users can find clinics or therapists by city
          </p>
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
          <a href='https://github.com/aschweik766/breakfast-club-FrontEnd' target='_blank' rel='noreferrer' className='project-github'>Github</a>
          <p className='project-description'><b>Mongo, Express, React, Node.js, CSS</b>
            <br></br>
            an application that displays daily/monthly horoscope information, personal to the user, and includes a dating feature that utilizes swipe functionality
          </p>
        </div>

        <br></br>

        <div className='project3'>
          <div className='project-item'>
            <div className='browser'>
              <div className='circle1'></div>
              <div className='circle2'></div>
              <div className='circle3'></div>
              <p className='project-title'>DraftDay</p>
            </div>
            <a href='https://polar-reef-72504.herokuapp.com/' target='_blank' rel='noreferrer' className='project-link'><img src={draftday} alt='draftday homepage'></img></a>
          </div>
          {/* <p className='project-title'>TherapyReady</p> */}
          <a href='https://github.com/charnaye95/DraftDay' target='_blank' rel='noreferrer' className='project-github'>Github</a>
          <p className='project-description'>
            <b>Mongo, Express, Node.js, EJS, CSS</b>
            <br></br>
            an application that showcases a draft prospect database of the NBA and ideally scouts could use it throughout a season to keep track of players they would be interested in</p>
        </div>

        <br></br>
        <div className='project4'>
          <div className='project-item'>
            <div className='browser'>
              <div className='circle1'></div>
              <div className='circle2'></div>
              <div className='circle3'></div>
              <p className='project-title'>Movie Madness</p>
            </div>
            <a href='https://charnaye95.github.io/MovieMadness/' target='_blank' rel='noreferrer' className='project-link'><img src={moviemadness} alt='movie madness homepage'></img></a>
          </div>
          {/* <p className='project-title'>TherapyReady</p> */}
          <a href='https://github.com/charnaye95/MovieMadness' target='_blank' rel='noreferrer' className='project-github'>Github</a>
          <p className='project-description'>
            <b>HTML, CSS, JavaScript</b>
            <br></br>
            a Trivia game using HTML, CSS, and Vanilla JavaScript. The application rendered in the browser, implemented DOM manipulation, integrated semantic markup, and exhibited minimal, DRY code constructed by functions</p>
        </div>
      </div>

    </div>
  )
}

export default Projects