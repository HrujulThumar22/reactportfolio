import React,{useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/logo.png";
import "./navbar.style.css";

const MyNavbar = () => {
    const [active, setactive] = useState([true,false,false,false,false,false]);

    const OnSelect=(e)=>{
        console.log(e);
        switch(e){
            case "#home": setactive([true,false,false,false,false,false]);break;
            case "#about": setactive([false,true,false,false,false,false]);break;
            case "#skills": setactive([false,false,true,false,false,false]);break;
            case "#education": setactive([false,false,false,true,false,false]);break;
            case "#projects": setactive([false,false,false,false,true,false]);break;
            case "#contact": setactive([false,false,false,false,false,true]);break;
            default:break;
        }
    }
  return (
        <Navbar
            fixed="top"
            variant="dark"
            expand="md"
            className="animate-navbar nav-theme justify-content-between"
        >
            <div>
                <Navbar.Brand href="#home">
                    <img className="logo" src={Logo} alt="" />
                </Navbar.Brand>
            </div>
            <div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ">
                        <Nav.Link class="nav-link" active={active[0]} onSelect={OnSelect} href="#home">Home</Nav.Link>
                        <Nav.Link class="nav-link" active={active[1]} onSelect={OnSelect} href="#about">About</Nav.Link>
                        <Nav.Link class="nav-link" active={active[2]} onSelect={OnSelect} href="#skills">Skills</Nav.Link>
                        <Nav.Link class="nav-link" active={active[3]} onSelect={OnSelect} href="#education">Education</Nav.Link>
                        <Nav.Link class="nav-link" active={active[4]} onSelect={OnSelect} href="#projects">Projects</Nav.Link>
                        <Nav.Link class="nav-link" active={active[5]} onSelect={OnSelect} href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
  );
};

export default MyNavbar;
