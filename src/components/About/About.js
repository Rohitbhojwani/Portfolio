import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { o1 } from "../../Assets/Projects/O1.jpeg";
import { e2 } from "../../Assets/Projects/IEEE.jpg";
import Url from "../../Assets/Projects/Url.jpeg";
import ExperienceCard from "./ExperienceCard";
import Education from './Education';


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          <Container fluid className="project-section">
            <Particle />
            <Container
              xs={12}
              sx={{
                height: "90vh",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                mb: "10rem",
              }}
            >
              <Education/>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Experience
              </h1>
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                <Col md={5} className="project-card">
                  <ExperienceCard
                    imgPath={Url}
                    title="Catalysing Dream and Beyond " 
                    description="Backend Intern"
                    duration="Feb 2022 to Jul 2022 (6-months)"
                    subtext="Worked as an Backend Web Developer to design Backend using Django, RestFramework and some other libraries."
                  />
                </Col>

                <Col md={5} className="project-card">
                  <ExperienceCard
                    imgPath={Url}
                    title="IEEE Bombay Section"
                    description="Full Stack Developer Intern"
                    duration="Dec 2022 to Feb 2023 (3-months)"
                    subtext="Worked as an Full Stack Developer to design and develop a web app using React, Node and other technologies."
                  />
                </Col>

              </Row>

              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Volunteer Experience
              </h1>
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                <Col md={5} className="project-card">
                  <ExperienceCard
                    imgPath={Url}
                    title="Catalysing Dream and Beyond " 
                    description="Backend Intern"
                    duration="Feb 2022 to Jul 2022 (6-months)"
                    subtext="Worked as an Backend Web Developer to design Backend using Django, RestFramework and some other libraries."
                  />
                </Col>

                <Col md={5} className="project-card">
                  <ExperienceCard
                    imgPath={e2}
                    title="IEEE Bombay Section"
                    description="Full Stack Developer Intern"
                    duration="Dec 2022 to Feb 2023 (3-months)"
                    subtext="Worked as an Full Stack Developer to design and develop a web app using React, Node and other technologies."
                  />
                </Col>

              </Row>
            </Container>
          </Container>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
