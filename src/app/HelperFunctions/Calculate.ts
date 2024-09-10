"use client";
import { useState } from "react";
import { DogRaces } from "../utils/DogRace";

const difference = (
  DogRaces: {
    name: string;
    need: number;
    img: string;
    activity_level: number;
    exercise_needs: string;
  }[],
  time: number,
  setHappy: (isHappy: boolean) => void,
) => {
  const isHappy = DogRaces.some((dog) => time > dog.need);
  setHappy(isHappy);
};

export default difference;
