"use client";
import { useState } from "react";
import { DogRaces } from "../utils/DogRace";

const difference = (
  DogRaces: any[],
  time: number,
  setHappy: (isHappy: boolean) => void,
) => {
  DogRaces.forEach((dog) => {
    if (time > dog.need) {
      setHappy(true);
      console.log("your dog is happy !");
    } else {
      console.log("your dog is happy !");
    }
  });
};

export default difference;
