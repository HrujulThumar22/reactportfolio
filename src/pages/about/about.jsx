import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";
import Profile from "../../assets/img/profile/profile.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        <Col xs={12} md={4}>
                            <Row className="justify-content-center mb-2 mr-2 ">
                                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid rounded />
                            </Row>
                        </Col>
                        <Col xs={12} md={8}>
                            Hi there! I am <strong className="titleText">&nbsp;Hrujul Thumar</strong>
                            <br />A passionate programmer, born and brought up in India. I am a Full Stack Web Developer with React.js, Express.js, Node.js, and MySQL, MongoDB as my tech stack.
                            <br/>I persuing B.Tech in Computer Science and Engineering from Nirma University.
                            <hr/>
                            <strong><span className="titleText">Career Objective:</span></strong>
                            <br/>To pursue a job opportunity in a competitive environment that will challenge me to push my boundaries and expand my knowledge in the field of computer science while allowing me to add value to the dynamics of the company.
                            <hr/>

                                <Row>
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-primary">
                                                Let's talk
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://drive.google.com/file/d/1tPmlBUEyd_UMjBnzhSMCkJMo2ncrqrcb/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-success">
                                            My Resume
                                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/HrujulThumar22" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-dark">
                                            GitHub
                                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/hrujul-thumar-b81662183/" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-info">
                                            LinkedIn
                                        </Button>
                                        </a>
                                    </div>
                                </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;