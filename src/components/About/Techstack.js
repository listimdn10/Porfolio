import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiPython,
  DiGit,
  DiMongodb,
} from "react-icons/di";
import {
  SiSolidity,
  SiMysql,
  SiPostgresql,
  SiPytorch,
  SiTensorflow,
  SiOpenai,
  SiChainlink,
  SiNodedotjs,
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>
      {/* Smart Contract Development */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNodedotjs /> {/* Hardhat (JS env) */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /> {/* EVM-like storage */}
      </Col>
      {/* Machine Learning / Deep Learning */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      {/* LLM Ecosystem */}
      <Col xs={4} md={2} className="tech-icons">
        <SiChainlink />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai />
      </Col>
      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
