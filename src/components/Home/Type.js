import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Blockchain Security",
          "Large Language Models (LLMs)",
          "Researcher in Privacy-Preserving AI",
          "Smart Contract Fuzzing with Agentic AI",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
