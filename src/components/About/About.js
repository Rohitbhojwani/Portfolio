import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import ProjectCard from "../Projects/ProjectCards";
import EducationCard from "./EducationCard";
import blog from "../../Assets/Projects/blog.jpg";
import Chat from "../../Assets/Projects/Chat.jpeg";
import Crypt from "../../Assets/Projects/GithubCrypt.png";
import Music from "../../Assets/Projects/Music.png";
import Url from "../../Assets/Projects/Url.jpeg";
import Weather from "../../Assets/Projects/Weather .png";
import EducationCards from "./EducationCard";

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
            <Container>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Education
              </h1>
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={5}  className="project-card">

                  
                  <EducationCard
                    title="Shri Ramdeobaba College of Engineering and Management" 
                    
                    description="A Decentralized Platform for Open Source developers. It provides a platform for developers to find projects to work
              on and get rewarded for their work. It also provides a platform for project owners to find developers to work on their
              projects and pay them in crypto. Developers can post their projects issues and get it solved by other developers."
                  />
                </Col>

                <Col md={5} className="project-card">
                  <ProjectCard
                    imgPath={Chat}
                    isBlog={false}
                    title="We-Chat"
                    description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                    ghLink="https://github.com/soumyajit4419/Chatify"
                    demoLink="https://chatify-49.web.app/"
                  />
                </Col>

                <Col md={5} className="project-card">
                  <ProjectCard
                    imgPath={Url}
                    isBlog={false}
                    title="URL-Shortner"
                    description="A Web-App which converts long URL into a short URL, and User gets analysis for each shortened Link"
                    ghLink="https://github.com/soumyajit4419/Editor.io"
                    demoLink="https://editor.soumya-jit.tech/"
                  />
                </Col>

                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={Weather}
                    isBlog={false}
                    title="Weather App"
                    description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
                    ghLink="https://github.com/Rohitbhojwani/weather-app"
                    // demoLink="https://plant49-ai.herokuapp.com/"
                  />
                </Col>

                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={blog}
                    isBlog={false}
                    title="Blog App"
                    description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
                    ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
                    // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
                  />
                </Col>

                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={Music}
                    isBlog={false}
                    title="Music-Ween"
                    description="Made a fully working Music Player. This was the project made for college contest Crack-O-Ween."
                    ghLink="https://github.com/Rohitbhojwani/Music-Website"
                    demoLink="https://bhushan21z.github.io/Music-Player/"
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
