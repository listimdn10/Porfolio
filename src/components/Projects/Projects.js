import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the research and security-related projects I’ve worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* RAPP */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="RAPP: Reasoning-Aware Adaptive Prompt Protection"
              description="A system to safeguard LLM prompts against direct and indirect leakage. Features Adaptive Protection Agent (APA), Reasoning Privacy Analyzer (RPA), reversible PII masking, and reinforcement learning extensibility."
              ghLink="https://github.com/listimdn10/RAPP.git"
            />
          </Col>

          {/* RAG-SmartVuln */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="RAG-SmartVuln"
              description="Enhancing smart contract vulnerability detection via Retrieval-Augmented LLMs. Built vulnerability knowledge base with Pinecone, fine-tuned Qwen and Deepseek models. Accepted at IEEE MAPR 2025."
              ghLink="https://github.com/listimdn10/RAG-SmartVuln"
              demoLink="https://doi.org/10.1109/MAPR67746.2025.11134018"
            />
          </Col>

          {/* AgriCarbonDEX */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="AgriCarbonDEX"
              description="A carbon credit & environmental data trading platform powered by blockchain and LLM agents. Includes ERC-721/20 tokens, DID traceability, multi-agent reasoning, and ESG trading bots."
              ghLink="https://github.com/AgriCarbonDEX-team"
            />
          </Col>

          {/* Multi-Agent Vulnerability Detection */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Multi-Agent Vulnerability Detection"
              description="Four-agent architecture coordinated with CrewAI: Fetch, RAG, Parser, and Fusion agents. Combines Neo4j KG, GATv2 embeddings, CodeBERT, and MiniLM for smart contract vulnerability detection."
              ghLink="https://github.com/username"
            />
          </Col>

          {/* Fuzzing with Agentic AI */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Fuzzing Smart Contracts with Agentic AI"
              description="Applied TextCNN and GATv2 on DappScan dataset. Integrated Multi-LLM Agents to generate fuzzing seeds. Enhanced FinanceFuzz() with agentic workflows to improve coverage and consistency."
              ghLink="https://github.com/username"
            />
          </Col>

          {/* CRYSTALS-Dilithium */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="CRYSTALS-Dilithium for Digital Government"
              description="Implemented post-quantum CRYSTALS-Dilithium digital signature for government documents. Built CA system, PDF signing with QR codes, secure storage in MongoDB GridFS, and CLI/GUI interfaces."
              ghLink="https://github.com/listimdn10/CryptoProject"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
