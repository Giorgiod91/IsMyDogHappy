import { div } from "framer-motion/client";
import React from "react";

type Props = {};

function About({}: Props) {
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
