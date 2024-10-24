"use client";
import React, { useState } from "react";
import DogRace from "./DogRace";
import TimeToMove from "./TimeToMove";
import { motion } from "framer-motion";

function StateContainer({ susge, susge2 }: { susge: string; susge2: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <motion.div
      whileInView={{ backgroundColor: "" }}
      className="relative mx-auto mt-12 flex max-w-4xl flex-col items-center justify-center rounded-lg bg-gray-900 p-6 shadow-2xl"
    >
      <h2 className="mb-6 text-4xl font-extrabold text-white md:text-7xl">
        <span className="text-[#10B981]">Y</span>
        our <span className="text-[#10B981]">D</span>og&apos;s{" "}
        <span className="text-[#10B981]">S</span>tats
      </h2>
      <div className="flex w-full flex-col gap-6 overflow-x-scroll md:grid md:flex-none md:grid-cols-2 md:overflow-visible">
        <div className="flex flex-col items-center justify-center rounded-lg p-6 shadow-md">
          <DogRace susge={susge} susge2={susge2} />
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg p-6 shadow-md">
          <TimeToMove />
        </div>
      </div>
    </motion.div>
  );
}

export default StateContainer;
