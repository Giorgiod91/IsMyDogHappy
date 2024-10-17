import { div } from "framer-motion/client";
import React from "react";

function About() {
  return (
    <div className="flex justify-center py-5">
      <p className="text-2xl">
        © 2024 PupHappiness. All rights reserved.{" "}
        <span className="text-yellow-400">🐾</span>
      </p>
    </div>
  );
}

export default About;
