"use client";
import React, { useState } from "react";
import DogRace from "./DogRace";
import TimeToMove from "./TimeToMove";

type Props = {};

function StateContainer({ susge, susge2 }: { susge: string; susge2: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="flex">
      <div className="flex flex-row justify-center space-x-10 p-5">
        <DogRace susge={susge} susge2={susge2} />
        <TimeToMove />
        <TimeToMove />
      </div>
    </div>
  );
}

export default StateContainer;
