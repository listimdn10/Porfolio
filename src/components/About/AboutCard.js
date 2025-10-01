import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nguyen Dang Quynh Nhu </span>
            from <span className="purple"> Ho Chi Minh city, Vietnam.</span>
            <br />
            I am currently an intern at the UIT Information Security Laboratory, working on Smart Contract Fuzzing with Agentic AI.
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Attending startup competitions & innovation challenges,
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring research papers in AI Safety and Sustainable Environment.
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "The cave you fear to enter holds the treasure you seek"{" "}
          </p>
          <footer className="blockquote-footer">Joseph Campbell</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
