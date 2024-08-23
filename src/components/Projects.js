import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/AgarRiskPro.png";
import projImg2 from "../assets/img/Harcourts.png";
import projImg3 from "../assets/img/Ticket.png";
import projImg4 from "../assets/img/AgriOne.png";
import projImg5 from "../assets/img/socialMediaApp.png";
import projImg6 from "../assets/img/Recipe.jpeg";
import projImg7 from "../assets/img/healthCare.png";
import projImg8 from "../assets/img/mernProject.jpg";
import projImg9 from "../assets/img/Movie.png";
import comingSoon from "../assets/img/ComingSoon.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projectsTab1 = [
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
  ];

  const projectsTab2 = [
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
      gitHubUrl: "",
    },
    {
      title: "Recipe Application",
      description:
        "Designed and developed a Recipe application using swiftUI",
      imgUrl: projImg6,
      gitHubUrl: "",
    },

  ];

  const projectsTab3 = [
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

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <div className="skill-bx4">
          <Row>
            <Col>
              <h2>PROJECTS</h2>
              <br />
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
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Tab 04</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row style={{ marginTop: "40px" }}>
                      {projectsTab1.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row style={{ marginTop: "40px" }}>
                      {projectsTab2.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row style={{ marginTop: "40px" }}>
                      {projectsTab3.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
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
            </Col>
          </Row>
        </div>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};
