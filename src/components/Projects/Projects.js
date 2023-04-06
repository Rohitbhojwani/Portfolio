import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.jpg";
import Chat from "../../Assets/Projects/Chat.jpeg";
import Crypt from "../../Assets/Projects/GithubCrypt.png";
import Music from "../../Assets/Projects/Music.png";
import Url from "../../Assets/Projects/Url.jpeg"
import Weather from "../../Assets/Projects/Weather .png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Crypt}
              isBlog={false}
              title="Github-Crypt"
              description="A Decentralized Platform for Open Source developers. It provides a platform for developers to find projects to work
              on and get rewarded for their work. It also provides a platform for project owners to find developers to work on their
              projects and pay them in crypto. Developers can post their projects issues and get it solved by other developers."
              ghLink="https://github.com/Rohitbhojwani/GithubCrypt"
              demoLink="https://githubcrypt.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chat}
              isBlog={false}
              title="We-Chat"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Rohitbhojwani/WeChat"

            />
          </Col>

          <Col md={4} className="project-card">
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

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog App"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/Rohitbhojwani/BlogApp"
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
  );
}

export default Projects;
