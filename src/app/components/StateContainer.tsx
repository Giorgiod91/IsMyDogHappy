"use client";
import React, { useState } from "react";
import DogRace from "./DogRace";
import TimeToMove from "./TimeToMove";

type Props = {};

function StateContainer({ susge, susge2 }: { susge: string; susge2: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="relative mx-auto mt-12 flex max-w-4xl flex-col items-center justify-center rounded-lg bg-gray-900 p-6 shadow-2xl">
      <h2 className="mb-6 text-3xl font-bold text-white">Your Dog's Stats</h2>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center rounded-lg p-6 shadow-md">
          <DogRace susge={susge} susge2={susge2} />
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg p-6 shadow-md">
          <TimeToMove />
        </div>
      </div>
    </div>
  );
}

export default StateContainer;
