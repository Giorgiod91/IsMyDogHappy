"use client";
import React, { useState } from "react";
import { DogRaces } from "../utils/DogRace";
import { FcRight } from "react-icons/fc";

type Props = {};

function DogRace({}: Props) {
  const [pictureClicked, setPictureclicked] = useState(false);

  const slidePictures = () => {
    setPictureclicked(true);
  };

  return (
    <div className="border-6 flex h-[280px] w-[200px] flex-col border shadow-lg transition hover:scale-105">
      <h1 className="p-2 text-center">Pick the Race </h1>
      <div className="flex flex-row space-x-3">
        <img src="" alt="dograce" className="" />
        <FcRight onClick={slidePictures} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default DogRace;
