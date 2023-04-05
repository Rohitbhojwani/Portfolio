import React from "react";
import Card from "react-bootstrap/Card";
import { FaBold } from "react-icons/fa";
// import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
// import { BsGithub } from "react-icons/bs";

function ExperienceCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ textAlign: "center", fontSize: "1.3rem", color:"white",fontWeight: "bold" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center", fontSize: "1.1rem", color: "rgba(156, 163, 175)",}}>
          {props.description}
          <br/>
          {props.duration}
        </Card.Text>
        {/* <Card.Text style={{textAlign: "center", fontSize: "1rem"}}>{props.duration}</Card.Text> */}
        <Card.Subtitle style={{ textAlign: "center", fontSize: "1rem", color: "rgba(156, 163, 175)",}}>{props.subtext}</Card.Subtitle>
        {"\n"}
        {"\n"}

      </Card.Body>
    </Card>
  );
}
export default ExperienceCard;
