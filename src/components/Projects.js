import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/AgarRiskPro.png";
import projImg2 from "../assets/img/Harcourts.png";
import projImg3 from "../assets/img/Ticket.png";
import projImg4 from "../assets/img/AgriOne.png";
import projImg5 from "../assets/img/socialMediaApp.png";
import projImg6 from "../assets/img/Recipe.jpeg";
import projImg7 from "../assets/img/healthCare.png";
import projImg8 from "../assets/img/mernProject.jpg";
import projImg9 from "../assets/img/Movie.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import comingSoon from "../assets/img/ComingSoon.png";

export const Projects = () => {

  const projects = [
    {
      title: "AgriOne",
      description:
        "Designed and developed the AgriOne website using angular, .NET core and SQL for the client requirements",
      imgUrl: projImg4,
      gitHubUrl: "",
    },
    {
      title: "Ticket Reservation System",
      description:
        "Designed and developed a Ticket Reservation System using React and .NET, that has functionalities like train booking management and train shedule management with admin dashboard",
      imgUrl: projImg3,
      gitHubUrl: "https://github.com/SUra1212/Ticket-Reservation-System",
    },
    {
      title: "AgarRiskPro",
      description:
        "Developed an IoT device and mobile application to monitor environmental parameters and revolutionize disease detection and management using Machine Leaning, Image Processing and React Native (Mobile)",
      imgUrl: projImg1,
      gitHubUrl: "https://github.com/SUra1212/AgarRiskPro",
    },
    {
      title: "Harcourts",
      description:
        "Designed and developed the Harcourts website using angular, SAP API and database for the client requirements",
      imgUrl: projImg2,
      gitHubUrl: "",
    },
    {
      title: "Social Media Application",
      description:
        "Designed and developed a Social Media application using swiftUI",
      imgUrl: projImg5,
      gitHubUrl: "https://github.com/SUra1212/Social_Media_App",
    },
    {
      title: "Recipe Application",
      description:
        "Designed and developed a Recipe application using swiftUI",
      imgUrl: projImg6,
      gitHubUrl: "https://github.com/SUra1212/Recipe_App",
    },
  ];

  const projects1 = [
    {
      title:
        "Cargo Management System",
      description:
        "Created a web-based Management System with a team of 8, using React, Node and Mongodb for Cargo Delivery Company in Sri Lanka",
      imgUrl: projImg8,
      gitHubUrl:
        "https://github.com/SLIIT-FacultyOfComputing/itp_project-itp2021_s2_b01_g13.git",
    },
    {
      title: "Health Care Application",
      description:
        "Designed and developed a Healthcare Management System using React Native, that has functionalities like patient management, doctor management and pharmact management",
      imgUrl: projImg7,
      gitHubUrl:
        "https://github.com/SLIIT-FacultyOfComputing/final-project-uee_fp_teamconquer.git",
    },
    {
      title: "Movie Ticket Booking System",
      description:
        "Designed and developed a Movie Ticket Booking System using React, Node and Mongodb",
      imgUrl: projImg9,
      gitHubUrl: "https://github.com/SUra1212/Movie-Booking-Resevation",
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <br/><br/>
                <Tab.Container id="project-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 01</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 02</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 03</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row style={{ marginTop: "40px" }}>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row style={{ marginTop: "40px" }}>
                      {projects1.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <img
                        src={comingSoon}
                        alt="Header Img"
                        style={{ width: "400px", height: "244px" }}
                      />
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
