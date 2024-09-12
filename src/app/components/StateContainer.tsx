"use client";
import React, { useState } from "react";
import DogRace from "./DogRace";
import TimeToMove from "./TimeToMove";

type Props = {};

function StateContainer({}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="flex">
      <div className="flex flex-row justify-center space-x-10 p-5">
        <DogRace />
        <TimeToMove />
        <TimeToMove />
      </div>
    </div>
  );
}

export default StateContainer;
