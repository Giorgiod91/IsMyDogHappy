"use client";
import React, { useState } from "react";
import DogRace from "./DogRace";
import TimeToMove from "./TimeToMove";

type Props = {};

function StateContainer({}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="flex flex-row">
      <h1>container</h1>
      <DogRace />
      <TimeToMove />
    </div>
  );
}

export default StateContainer;
