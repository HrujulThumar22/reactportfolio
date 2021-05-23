import './App.css';
import MyNavbar from './components/navbar/navbar'
import MyCarousel from './components/carousel/carousel'
import TitleMessage from './components/titleMesssage/titlemessage'
import About from './pages/about/about'
import Skills from './pages/skills/skills'
import Experience from './pages/experience/experience'
import TimeLine from './pages/timeline/timeline'
import ContactForm from './pages/contact/contact'
import FooterPanel from './components/footer/footer'
import {particlesOptions} from './particlesOptions'

import Fade from 'react-reveal'
import Slide from 'react-reveal'
import bg from "./assets/img/parallex/background.webp"
import Container from "react-bootstrap/Container";
import { Parallax } from "react-parallax";
import Particles from 'react-particles-js';
const App=()=> {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar/>
      <MyCarousel/> 
      <TitleMessage/>
      <Particles
        className="particles particles-box"
        params={particlesOptions}></Particles>
      <div>
      <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={bg}
          bgImageAlt=""
          strength={-200}
        >
          <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>
      <hr />
      <FooterPanel />
    </div>
  );
}

export default App;
