import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_PLACEDIN from "../../assets/img/projects/placedin.PNG"
import L_CLGSTD from "../../assets/img/projects/clfstd.jpg"
import L_RESTAURANT from "../../assets/img/projects/restaurant.png"
import L_STOCK from "../../assets/img/projects/stock.jpeg"
import L_NETWORK from "../../assets/img/projects/network.png"
import L_OSALGO from "../../assets/img/projects/osalgo.jpg"
import L_QUIZGUI from "../../assets/img/projects/quizgui.PNG"
import L_TEACHERFEEDBACK from "../../assets/img/projects/teacher.png"
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_ANDROID from "../../assets/img/skills/android.jpg";
import L_FIREBASE from "../../assets/img/skills/firebase.png";
import L_NETBEANS from "../../assets/img/skills/netbeans.png";
import L_PYTHON from "../../assets/img/skills/python.svg";
import L_MYSQL from "../../assets/img/skills/mysql.png"
import L_JAVA from "../../assets/img/skills/java.png"
import L_PACKETTRACER from "../../assets/img/skills/packettracer.jpg"
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";


import "./timeline.css";

const TimeLine = () => {
    return (
        <div id="projects">
        <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
        <Timeline>
            <Events>
            {/* Project: PlacedIn */}
            <ImageEvent
                date="04/2021"
                className="text-center"
                text="PlacedIn"
                src={L_PLACEDIN}
                alt="PlacedIn"
            >
                <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                    <Accordion>
                    <Card>
                        <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                        >
                        PROJECT DETAILS
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                            <strong>Description:</strong> This is a experience sharing App created with React and Material UI that enable users to share there interview experiences and raise doubts.
                            <hr />
                            <strong>Features:</strong>
                            <ul className="list-styles pt-1">
                                <li>Enable writing Interview Experiences and raise Doubts</li>
                                <li>allows to add buddies/ follow people</li>
                                <li>Made by Using React and MongoDB</li>
                                <li>Responsive Design</li>
                            </ul>
                            <hr />
                            <strong>Tech used:</strong>
                            <ul>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_HTML5}
                                    alt="HTML 5"
                                    rounded
                                    className="image-style m-1"
                                ></Image>{" "}
                                HTML5
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_CSS3}
                                    alt="CSS 3"
                                    rounded
                                    className="image-style m-1"
                                ></Image>{" "}
                                CSS3
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_REACT}
                                    alt="React"
                                    rounded
                                    className="image-style1 m-1"
                                ></Image>{" "}
                                React
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_BOOTSTRAP4}
                                    alt="Bootstrap 4"
                                    rounded
                                    className="image-style m-1"
                                ></Image>{" "}
                                Bootstrap4
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_MATERIALUI}
                                    alt="Material-UI"
                                    rounded
                                    className="image-style1 m-1"
                                ></Image>{" "}
                                Material-UI
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_MONGODB}
                                    alt="MongoDB"
                                    rounded
                                    className="image-style1 m-1"
                                ></Image>{" "}
                                MongoDB
                                </span>
                            </li>
                            </ul>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                    <UrlButton
                    href="https://placedin.herokuapp.com/"
                    target="_blank"
                    >
                    SEE LIVE
                    </UrlButton>
                    <UrlButton
                    href="https://github.com/HrujulThumar22/placedIn/tree/master"
                    target="_blank"
                    >
                    SOURCE CODE
                    </UrlButton>
                </div>
                </div>
            </ImageEvent>
            <ImageEvent
                date="11/2020"
                className="text-center"
                text="Restaurant Management System"
                src={L_RESTAURANT}
                alt="Restaurant Management System"
            >
                <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                    <Accordion>
                    <Card>
                        <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                        >
                        PROJECT DETAILS
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                            <strong>Description:</strong> Interactive GUI with multiple functionalities such as managing food-items list, employees list, billing etc. supported by database Connectivity build by applying SDLC Concepts.
                            <hr />
                            <strong>Features:</strong>
                            <ul className="list-styles pt-1">
                                <li>Allows Manager to manage tables bills, Waiting List etc</li>
                                <li>Allows owner to add and Manage Employees and Food Items</li>
                                <li>Made by Using NetBeans(Java) and MySQL.</li>
                            </ul>
                            <hr />
                            <strong>Tech used:</strong>
                            <ul>
                            <li>
                                <span className="p-2">
                                    <Image src={L_NETBEANS} alt="netbeans" rounded className="image-style1 m-1"/>{" "}Netbeans
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_MYSQL}
                                    alt="MySQL"
                                    rounded
                                    className="image-style1 m-1"
                                ></Image>{" "}
                                MySQL
                                </span>
                            </li>
                            </ul>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                    <UrlButton
                    href="https://github.com/HrujulThumar22/Restaurant-Management-System"
                    target="_blank"
                    >
                    SOURCE CODE
                    </UrlButton>
                </div>
                </div>
            </ImageEvent>
            <ImageEvent
                date="11/2020"
                className="text-center"
                text="Stock Market Prediction"
                src={L_STOCK}
                alt="Stock Market Prediction"
            >
                <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                    <Accordion>
                    <Card>
                        <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                        >
                        PROJECT DETAILS
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                            <strong>Description:</strong> Building a model to predict stock market prices, which is trained on the data given of stock market prices by our faculty.
                            <hr />
                            <strong>Features:</strong>
                            <ul className="list-styles pt-1">
                                <li>Upload Dataset and build a model</li>
                                <li>Predict data for new data</li>
                                <li>Made by Using Python</li>
                            </ul>
                            <hr />
                            <strong>Tech used:</strong>
                            <ul>
                            <li>
                                <span className="p-2">
                                    <Image src={L_PYTHON} alt="Python" rounded className="image-style1 m-1"/>{" "}Python
                                </span>
                            </li>
                            </ul>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                    <UrlButton
                    href="https://github.com/HrujulThumar22/The-Nameless"
                    target="_blank"
                    >
                    SOURCE CODE
                    </UrlButton>
                </div>
                </div>
            </ImageEvent>
            <ImageEvent
                date="11/2020"
                className="text-center"
                text="Network Design of School/College"
                src={L_NETWORK}
                alt="Network Design of School/College"
            >
                <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                    <Accordion>
                    <Card>
                        <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                        >
                        PROJECT DETAILS
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                            <strong>Description:</strong> Designed a Network for a school in Cisco Packet Tracer wherein the we configured Web Servers, DNS Server and assigned different subnets to different labs and connected the labs to the main network.
                            <hr />
                            <strong>Features:</strong>
                            <ul className="list-styles pt-1">
                                <li>Subnetting, Wireless connection, Network Organisation(LAN,WAN etc), Connecting Different Networks</li>
                            </ul>
                            <hr />
                            <strong>Tech used:</strong>
                            <ul>
                            <li>
                                <span className="p-2">
                                    <Image src={L_PACKETTRACER} alt="Cisco Packet Tracer" rounded className="image-style1 m-1"/>{" "}Cisco Packet Tracer
                                </span>
                            </li>
                            </ul>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                    <UrlButton
                    href="https://github.com/HrujulThumar22/The-Nameless"
                    target="_blank"
                    >
                    SOURCE CODE
                    </UrlButton>
                </div>
                </div>
            </ImageEvent>
            <ImageEvent
                date="05/2020"
                className="text-center"
                text="College Student Material Exchange"
                src={L_CLGSTD}
                alt="Android App"
            >
                <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                    <Accordion>
                    <Card>
                        <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                        >
                        PROJECT DETAILS
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                            <strong>Description:</strong> App Delevoped in Android Studio using Firebase to allow  college student exchange study material liks Boks,Lab Coat, Instruments etc.
                            <hr />
                            <strong>Features:</strong>
                            <ul className="list-styles pt-1">
                                <li>Allows User to Upload/But college Maretrials</li>
                                <li>Track Orders</li>
                                <li>Made by Using Android and Firebase</li>
                                <li>Responsive Design</li>
                            </ul>
                            <hr />
                            <strong>Tech used:</strong>
                            <ul>
                            <li>
                                <span className="p-2">
                                    <Image src={L_ANDROID} alt="Android" rounded className="image-style1 m-1"/>{" "}Android
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_FIREBASE}
                                    alt="Firebase"
                                    rounded
                                    className="image-style1 m-1"
                                ></Image>{" "}
                                FireBase
                                </span>
                            </li>
                            </ul>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                    <UrlButton
                    href="https://github.com/HrujulThumar22/The-Nameless"
                    target="_blank"
                    >
                    SOURCE CODE
                    </UrlButton>
                </div>
                </div>
            </ImageEvent>
            <ImageEvent
                date="03/2020"
                className="text-center"
                text="Display of OS Algos"
                src={L_OSALGO}
                alt="Display of OS Algos"
            >
                <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                    <Accordion>
                    <Card>
                        <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                        >
                        PROJECT DETAILS
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                            <strong>Description:</strong> A GUI based application which takes the information about the processes and tell the average waiting time, average completion time after implementing the selected scheduling algorithm.
                            <hr />
                            <strong>Features:</strong>
                            <ul className="list-styles pt-1">
                                <li>FCFS</li>
                                <li>Round Robin</li>
                                <li>LRTF</li>
                            </ul>
                            <hr />
                            <strong>Tech used:</strong>
                            <ul>
                            <li>
                                <span className="p-2">
                                    <Image src={L_NETBEANS} alt="Python" rounded className="image-style1 m-1"/>{" "}NetBreans
                                </span>
                            </li>
                            </ul>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                    <UrlButton
                    href="https://github.com/HrujulThumar22/The-Nameless"
                    target="_blank"
                    >
                    SOURCE CODE
                    </UrlButton>
                </div>
                </div>
            </ImageEvent>
            <ImageEvent
                date="03/2020"
                className="text-center"
                text="Quiz GUI using Tkinter"
                src={L_QUIZGUI}
                alt="Quiz GUI using Tkinter"
            >
                <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                    <Accordion>
                    <Card>
                        <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                        >
                        PROJECT DETAILS
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                            <strong>Description:</strong> A GUI based application which allows teachers to add new questions and students to take the test based on the questions added.
                            <hr />
                            <strong>Features:</strong>
                            <ul className="list-styles pt-1">
                                <li>Allows to add MCQ type Questions</li>
                                <li>Alow to add one word ans Question</li>
                                <li>Allows to add short answer question</li>
                                <li>Allows to add Long answer question</li>
                                <li>Automatically calculates marks</li>
                            </ul>
                            <hr />
                            <strong>Tech used:</strong>
                            <ul>
                            <li>
                                <span className="p-2">
                                    <Image src={L_PYTHON} alt="Python" rounded className="image-style1 m-1"/>{" "}Python
                                </span>
                            </li>
                            </ul>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                    <UrlButton
                    href="https://github.com/HrujulThumar22/The-Nameless"
                    target="_blank"
                    >
                    SOURCE CODE
                    </UrlButton>
                </div>
                </div>
            </ImageEvent>
            <ImageEvent
                date="03/2020"
                className="text-center"
                text="Teacher Feedback using JAVA"
                src={L_TEACHERFEEDBACK}
                alt="Teacher Feedback using JAVA"
            >
                <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                    <Accordion>
                    <Card>
                        <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                        >
                        PROJECT DETAILS
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                            <strong>Description:</strong> A CMD based application built with file handling concept,which allows student to review there teachers and display the average rating to the teacher.
                            <hr />
                            <strong>Features:</strong>
                            <ul className="list-styles pt-1">
                                <li>Allows student to give feedback</li>
                                <li>Allows teacher to view there average rating</li>
                                <li>Made by Using Java</li>
                            </ul>
                            <hr />
                            <strong>Tech used:</strong>
                            <ul>
                            <li>
                                <span className="p-2">
                                    <Image src={L_JAVA} alt="Java" rounded className="image-style1 m-1"/>{" "}Java
                                </span>
                            </li>
                            </ul>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                    <UrlButton
                    href="https://github.com/HrujulThumar22/The-Nameless"
                    target="_blank"
                    >
                    SOURCE CODE
                    </UrlButton>
                </div>
                </div>
            </ImageEvent>
            </Events>
        </Timeline>
        </div>
    );
};

export default TimeLine;