// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Intro from './Components/Intro';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import GitHubCalendar from 'react-github-calendar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <div className='calendar'>
        <h2 className='title' id='project-heading'>
          Github <br/>History
        </h2>
        <GitHubCalendar username='charnaye95' fontSize={17} blockSize={12} color='black' className='gh-calendar'/>

      </div>
      <Contact />
      <Footer/>


    </div>
  );
}

export default App;
