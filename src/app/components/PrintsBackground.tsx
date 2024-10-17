import { motion } from "framer-motion";
import React from "react";

type PrintsBackgroundProps = {
  printCount: number;
};

const PrintsBackground = ({ printCount }: PrintsBackgroundProps) => {
  const generatePrints = () => {
    let prints: JSX.Element[] = [];
    for (let i = 0; i < printCount; i++) {
      const size = Math.random() * 3 + 2;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      prints.push(
        <div
          key={i}
          style={{
            position: "absolute",
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            top: `${top}%`,
            zIndex: 1,
          }}
        >
          🐾
        </div>,
      );
    }
    return prints;
  };
  return (
    <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
      {generatePrints()}
    </div>
  );
};

export default PrintsBackground;
