import './App.css';
import MyNavbar from './components/navbar/navbar'
import MyCarousel from './components/carousel/carousel'
import TitleMessage from './components/titleMesssage/titlemessage'
import About from './pages/about/about'

import Fade from 'react-reveal'
import Container from "react-bootstrap/Container";
import { Parallax } from "react-parallax";
const App=()=> {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar/>
      <MyCarousel/> 
      <TitleMessage/>
      <div>
      <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
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
      My Portfolio

    </div>
  );
}

export default App;
