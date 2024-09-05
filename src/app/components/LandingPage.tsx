import React from "react";
import DogRace from "./DogRace";
import TimeToMove from "./TimeToMove";

type Props = {};

function LandingPage({}: Props) {
  return (
    <div className="flex flex-col items-center pt-40">
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
        🐕 Dog Happiness Tracker
      </h1>
      <p className="p-2 pl-11 text-lg">
        Find out if your friend is getting enough exercise and attention to stay
        healthy and happy! 🐾{" "}
      </p>
      <div className="grid-ro2 grid grid-cols-2 gap-6">
        <DogRace />
        <TimeToMove />
        <DogRace />
      </div>
    </div>
  );
}

export default LandingPage;
