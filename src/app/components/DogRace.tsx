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
    <div className="border-6 flex h-[420px] w-[300px] flex-col border shadow-lg transition hover:scale-105">
      <h1 className="p-2 text-center">Pick the Race </h1>
      <div className="flex flex-col items-center space-x-3">
        <img src={DogRaces[currentIndex]?.img} alt="dograce" className="p-2" />
        <p className="pr-3">{DogRaces[currentIndex]?.name}</p>
        <div className="flex w-full flex-col space-y-2">
          <p>Activity Level</p>
          <progress
            className="progress progress-accent w-full"
            value={DogRaces[currentIndex]?.activity_level}
            max="100"
          ></progress>
          <p>Exercise Needs</p>
          <p>
            {DogRaces[currentIndex]?.exercise_needs ||
              "Information not available"}
          </p>
        </div>
      </div>

      <h2 className="pl-2">Next</h2>
      <FcRight onClick={slidePictures} className="cursor-pointer pl-2" />
    </div>
  );
}

export default DogRace;
