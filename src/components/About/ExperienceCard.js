import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCard(props) {
  return (
    <Card className="project-card-view" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <span class="card-image" style={{width:"200px"}}>
        <Card.Img variant="top" src={props.imgPath} alt="card-img" height={props.imgSize} />
      </span>
      <Card.Body>
        <Card.Title
          style={{
            textAlign: "center",
            fontSize: "1.3rem",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {props.title}
        </Card.Title>
        <Card.Text
          style={{
            textAlign: "center",
            fontSize: "1.1rem",
            color: "rgba(156, 163, 175)",
          }}
        >
          {props.description}
          <br />
          {props.duration}
        </Card.Text>
        {/* <Card.Text style={{textAlign: "center", fontSize: "1rem"}}>{props.duration}</Card.Text> */}
        <Card.Subtitle
          style={{
            textAlign: "center",
            fontSize: "1rem",
            color: "rgba(156, 163, 175)",
          }}
        >
          {props.subtext}
        </Card.Subtitle>
        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
  );
}
export default ExperienceCard;
