import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import github from '../assets/images/icons8-github-96.svg'
import linkedin from '../assets/images/icons8-linkedin-circled.svg'

// may or may not use
import {
    useState,
    // useEffect 
} from 'react'

function NavBar() {
    const [activeLink, setActiveLink] = useState('home')
    // const [scrolled, setScrolled] = useState(false)

    // useEffect(() => {
    //     const onScroll = () => {
    //         if (window.scrollY > 50) {
    //             setScrolled(true)
    //         } else {
    //             setScrolled(false)
    //         }
    //     }

    //     window.addEventListener('scroll', onScroll)
    //     return () => window.removeEventListener('scroll', onScroll)
    // }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <Navbar expand="lg" className='header'
        // className={scrolled ? "scrolled" : ""}
        >
            <Container className='navigation'>
                <Navbar.Brand href="#home" className='name'>
                    <h1> {'{ CG }'}
                        {/* CHARNAYE GRIER */}
                    </h1>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}><h1>Home</h1></Nav.Link>

                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}><h1>About</h1></Nav.Link>

                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}><h1>Skills</h1></Nav.Link>

                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}><h1>Projects</h1></Nav.Link>

                        <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}><h1>Contact</h1></Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='https://github.com/charnaye95/' target='_blank' rel='noreferrer' className='github-link'><img src={github} alt='' className='social-logo'></img></a>
                            <a href='https://www.linkedin.com/in/charnayegrier/' target='_blank' rel='noreferrer' className='github-link'><img src={linkedin} alt='' className='social-logo'></img></a>
                        </div>
                        <a href='https://docs.google.com/document/d/1p09eVCmTVXcboatNZFYcFep7SlrIy5v56y6ulwPvDXg/edit?usp=sharing' target='_blank' rel='noreferrer' className='resume navbar-link'>Resume</a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar