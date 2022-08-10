import React from 'react'
import { useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'
import github from '../assets/images/icons8-github-96.svg'
import linkedin from '../assets/images/icons8-linkedin-circled.svg'
import resume from '../assets/resume.pdf'
import gif1 from '../assets/images/Developer Logo (1).gif'

function NavBar() {
    const [activeLink, setActiveLink] = useState('home')

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <Navbar expand="lg" className='header'>
            <Container className='navigation'>
                <Navbar.Brand href="#home" className='name'>
                    <img src={gif1} alt='' className='logo'></img>
                    {/* <h1> {'{ CG }'}
                        CHARNAYE GRIER
                    </h1> */}
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='home' smooth={true} duration={1500} className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}><h1>Home</h1></Link>

                        <Link to='about' smooth={true} duration={1500} className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}><h1>About</h1></Link>

                        <Link to='skills' smooth={true} duration={1500} className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}><h1>Skills</h1></Link>

                        <Link to='projects' smooth={true} duration={1500} className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}><h1>Projects</h1></Link>

                        <Link to='contact' smooth={true} duration={1500} className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}><h1>Contact</h1></Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='https://github.com/charnaye95/' target='_blank' rel='noreferrer' className='github-link'><img src={github} alt='' className='social-logo'></img></a>
                            <a href='https://www.linkedin.com/in/charnayegrier/' target='_blank' rel='noreferrer' className='github-link'><img src={linkedin} alt='' className='social-logo'></img></a>
                        </div>
                        <a href={resume} target='_blank' rel='noreferrer' className='resume navbar-link'>Resume</a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar