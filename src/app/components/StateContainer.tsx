"use client";
import React, { useState } from "react";
import DogRace from "./DogRace";
import TimeToMove from "./TimeToMove";

type Props = {};

function StateContainer({ susge, susge2 }: { susge: string; susge2: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center justify-center space-y-6 rounded-lg bg-gray-800 p-6 shadow-lg">
      <h2 className="text-2xl font-semibold text-white">Your Dog's Stats</h2>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col items-center rounded-lg bg-gray-700 p-4 shadow-md">
          <DogRace susge={susge} susge2={susge2} />
        </div>
        <div className="flex flex-col items-center rounded-lg bg-gray-700 p-4 shadow-md">
          <TimeToMove />
        </div>
        <div className="flex flex-col items-center rounded-lg bg-gray-700 p-4 shadow-md">
          <TimeToMove />
        </div>
      </div>
    </div>
  );
}

export default StateContainer;
