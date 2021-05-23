import './App.css';
import MyNavbar from './components/navbar/navbar'
import MyCarousel from './components/carousel/carousel'
import TitleMessage from './components/titleMesssage/titlemessage'
import About from './pages/about/about'
import Skills from './pages/skills/skills'
import Education from './pages/education/education'
import TimeLine from './pages/timeline/timeline'
import ContactForm from "./pages/contact/contact"
import FooterPanel from './components/footer/footer'
//import {particlesOptions} from './particlesOptions'

import Fade from 'react-reveal'
import Slide from 'react-reveal'
//import Particles from 'react-particles-js';
const App=()=> {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar/>
      <MyCarousel/> 
      <TitleMessage/>
      {/* <Particles
        className="particles particles-box"
        params={particlesOptions}></Particles> */}
      <div>
          <Fade duration={500}>
          <hr />
            <About />
          </Fade>
      </div>
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      <div>
          <Fade duration={500}>
            <hr />
            <Education />
          </Fade>
      </div>
      <div>
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </div>
      <div>
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
        </div>
      <hr />
      <FooterPanel />
    </div>
  );
}

export default App;
