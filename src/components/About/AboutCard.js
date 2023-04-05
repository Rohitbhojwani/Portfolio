import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rohit Bhojwani </span>
            from <span className="purple"> Nagpur, India.</span>
            <br />
            I'm passionate Full Stack web developer, a Competitive Programmer
            having an experience of web applications with Python, Django,
            Node.js, Express.js, RestFramework, Javascript, React.js and many
            more. <br/>
            I am currently a 3rd year B.Tech student of Computer Science and
            Engineering at Shri Ramdeobaba College of Engineering and
            Management, Nagpur.
             {/* I'm Web Developer and Blockchain enthusiast. I
            am looking forward to gain competency and exposure in it. */}
            <br />
            <br />
            {/* Apart from coding, some other activities that I love to do! */}
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
