import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import o1 from "../../Assets/Projects/O1-modified.png";
import ieee  from "../../Assets/Projects/IEEE.jpg";
import tcb from "../../Assets/Projects/tcb-modified.png";
import gfg from "../../Assets/Projects/gfg-modified.png"
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
                    imgPath={o1}
                    title="Catalysing Dream and Beyond " 
                    description="Backend Intern"
                    duration="Feb 2022 - Jul 2022 (6-months)"
                    subtext="Worked as an Backend Web Developer to design Backend using Django, RestFramework and some other libraries."
                    imgSize="200"
                  />
                </Col>

                <Col md={5} className="project-card">
                  <ExperienceCard
                    imgPath={ieee}
                    title="IEEE Bombay Section"
                    description="Full Stack Developer Intern"
                    duration="Dec 2022 - Feb 2023 (3-months)"
                    subtext="Worked as an Full Stack Developer to design and develop a web app using React, Node and other technologies."
                    imgSize="200"
                  />
                </Col>

              </Row>

              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Volunteer Experience
              </h1>
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                <Col md={5} className="project-card">
                  <ExperienceCard
                    imgPath={tcb}
                    title="The CodeBreakers Club" 
                    description="President"
                    duration="Nov 2022 - Present"
                    subtext="Leading Club as a President and working on development and expansion of The Code Breakers club"
                  />
                </Col>

                <Col md={5} className="project-card">
                  <ExperienceCard
                    imgPath={tcb}
                    title="The CodeBreakers Club"
                    description="Backend Lead"
                    duration="Aug 2021 - Oct 2022"
                    subtext="Worked as Backend Web Developer Lead to design club website and made DSA questions for CP Contest for club events hosted on CodeForces. Organised many events on Git, Blockchain, CP and many more"
                  />
                </Col>

                <Col md={5} className="project-card">
                  <ExperienceCard
                    imgPath={gfg}
                    title="Geeks for Geeks Chapter"
                    description="Full Stack Developer"
                    duration="Sep 2022 - Mar 2023"
                    subtext="Worked in Development of Club website and was a github repository maintainer for open source event 'Git-For-Geeks' and successfully maintained the repository and PRs"
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
