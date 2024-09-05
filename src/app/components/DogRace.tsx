"use client";
import React, { useState } from "react";
import { DogRaces } from "../utils/DogRace";
import { FcRight } from "react-icons/fc";
import { ImGift } from "react-icons/im";
import { DiVim } from "react-icons/di";

type Props = {};

function DogRace({}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slidePictures = () => {
    setCurrentIndex((prevIndex) =>
      // check if we are at the last item if so we set the prevIndex to 0 and start from the beginning else we set the index + 1
      prevIndex === DogRaces.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="relative flex h-[500px] w-[350px] flex-col items-center rounded-xl border-4 bg-[#FFDBB5] p-4 shadow-lg transition-transform hover:scale-105">
      <h1 className="mb-2 flex items-center space-x-2 text-lg font-semibold text-gray-700">
        🐶 <span>Pick the Race</span>
      </h1>
      <div className="mb-3 flex w-full flex-col items-center">
        <img
          src={DogRaces[currentIndex]?.img}
          alt="dograce"
          className="mb-4 h-48 w-full rounded-lg object-cover shadow-md"
        />
        <p className="mb-1 text-xl font-medium text-gray-800">
          {DogRaces[currentIndex]?.name} 🏆
        </p>
      </div>

      <div className="flex w-full flex-col space-y-2 px-4">
        <p className="text-sm font-semibold text-gray-600">⚡ Activity Level</p>
        <progress
          className="progress progress-accent w-full"
          value={DogRaces[currentIndex]?.activity_level}
          max="100"
        ></progress>

        <p className="text-sm font-semibold text-gray-600">🏃‍♂️ Exercise Needs</p>
        <p className="text-sm text-gray-700">
          {DogRaces[currentIndex]?.exercise_needs ||
            "ℹ️ Information not available"}
        </p>
      </div>

      <div className="absolute bottom-4 flex w-full items-center justify-between px-4">
        <h2 className="text-md font-semibold text-gray-600">Next 🐕</h2>
        <FcRight
          onClick={slidePictures}
          className="primary cursor-pointer text-3xl transition-transform hover:scale-110"
        />
      </div>
    </div>
  );
}

export default DogRace;
