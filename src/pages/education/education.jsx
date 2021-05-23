import React from "react";
import {Container,Row,Col,Card} from "react-bootstrap";
import L_CLG from "../../assets/img/education/clg.svg";
import L_10th from "../../assets/img/education/10th.svg";
import L_12th from "../../assets/img/education/12th.svg";
import Tilt from "react-tilt";
import "./education.css";

const Education = () => {
    return (
        <div className="py-3" id="education">
        <h1 className="pt-3 text-center pb-3">Education</h1>
        <Container>
            <Row>
                <Col sm="4">
                    <Tilt options={{ max: 20 }}>
                        <Card className="bg my-2">
                            <Card.Header as="h5" className="bg-dark d-flex justify-content-center flex-wrap">
                                <Card.Title className="text-white text-center">B.Tech</Card.Title>
                            </Card.Header>
                            <Card.Body className="d-flex justify-content-center flex-column">
                                <Tilt options={{ max: 50 }}>
                                    <div>
                                    <Card.Img variant="top" className="img-resize" src={L_CLG} alt="College logo" />
                                    </div>
                                <div>
                                    <Card.Text className="text-center style">
                                        <strong className="body-title-style">Nirma University</strong><br/>
                                        B.Tech In Computer Science and Engineering<br/>
                                        SPI : 8.29
                                    </Card.Text>
                                </div>
                                </Tilt>
                            </Card.Body>
                            <Card.Footer className="bg-dark d-flex justify-content-center flex-wrap ">
                                <small className="text-white text-center">2018-22</small>
                            </Card.Footer>
                        </Card>
                    </Tilt>
                </Col>
                <Col sm="4">
                    <Tilt options={{ max: 20 }}>
                        <Card className="bg my-2">
                            <Card.Header as="h5" className="bg-dark d-flex justify-content-center flex-wrap">
                                <Card.Title className="text-white text-center">Higher Secondary</Card.Title>
                            </Card.Header>
                            <Card.Body className="d-flex justify-content-center flex-column">
                            <Tilt options={{ max: 50 }}>
                                <div>
                                    <Card.Img variant="top" className="img-resize" src={L_12th} alt="12th logo" />
                                </div>
                                <div>
                                    <Card.Text className="text-center style">
                                        <strong className="body-title-style">Kokilaben Dhirubhai Ambani Vidyamandir</strong><br/>
                                        95.2%
                                    </Card.Text>
                                </div>
                                </Tilt>
                            </Card.Body>
                            <Card.Footer className="bg-dark d-flex justify-content-center flex-wrap ">
                                <small className="text-white text-center">2017-2018</small>
                            </Card.Footer>
                        </Card>
                    </Tilt>
                </Col>
                <Col sm="4">
                    <Tilt options={{ max: 20 }}>
                        <Card className="bg my-2">
                            <Card.Header as="h5" className="bg-dark d-flex justify-content-center flex-wrap">
                                <Card.Title className="text-white text-center">Secondary</Card.Title>
                            </Card.Header>
                            <Card.Body className="d-flex justify-content-center flex-column">
                            <Tilt options={{ max: 50 }}>
                                <div>
                                    <Card.Img variant="top" className="img-resize" src={L_10th} alt="10th logo" />
                                </div>
                                <div>
                                    <Card.Text className="text-center style">
                                        <strong className="body-title-style">Kokilaben Dhirubhai Ambani Vidyamandir</strong><br/>
                                        10 Pointer
                                    </Card.Text>
                                </div>
                                </Tilt>
                            </Card.Body>
                            <Card.Footer className="bg-dark d-flex justify-content-center flex-wrap ">
                                <small className="text-white text-center">2015-16</small>
                            </Card.Footer>
                        </Card>
                    </Tilt>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Education;