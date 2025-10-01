import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/woman.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m <b className="purple">Nguyen Dang Quynh Nhu</b>, currently pursuing a
              Bachelor’s degree in <b className="purple">Cybersecurity</b> at the
              University of Information Technology – VNU-HCM.
              <br />
              <br />
              I am driven by the vision of a 
              <i><b className="purple"> sustainable future </b></i> 
               enabled by 
              <b className="purple"> Blockchain </b> 
               and innovative technologies. 
              My passion lies in the convergence of 
              <b className="purple"> AI and Security</b>, 
              with a focus on 
              <i><b className="purple"> LLM-driven security </b></i> 
              and 
              <i><b className="purple"> Smart Contract vulnerability detection</b></i>.
              <br />
              I have led award-winning projects such as{" "}
              <b className="purple">RAPP: Reasoning-Aware Adaptive Prompt Protection</b>{" "}
              (Second Prize – VietFuture Awards 2025) and{" "}
              <b className="purple">RAG-SmartVuln</b> (accepted at IEEE MAPR 2025).
              <br />
              <br />
              My skill set spans{" "}
              <b className="purple">Python, C++, Solidity</b>; blockchain
              frameworks like <b className="purple">Hardhat, Truffle</b>;{" "}
              <b className="purple">LLM ecosystems</b> (LangChain, LlamaIndex,
              Hugging Face, Ollama, OpenAI API); and{" "}
              <b className="purple">Machine Learning/Deep Learning</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="woman" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/listimdn10"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:quynhnhu170218@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="www.linkedin.com/in/quynh-nhu-nguyen-dang-633382246"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/nguyen.ang.nhu.2024/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
