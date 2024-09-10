import React from "react";
import DogRace from "./DogRace";
import TimeToMove from "./TimeToMove";
import StateContainer from "./StateContainer";

type Props = {};

function LandingPage({}: Props) {
  return (
    <div className="mx-auto flex max-w-screen-lg flex-col items-center gap-10 px-4 pt-20">
      <div className="flex flex-row">
        <img src="/happy-dog.png" className="h-16 w-16" alt="" />
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          {" "}
          Dog Happiness Tracker
        </h1>
      </div>
      <p className="mt-4 text-center text-lg text-gray-600 md:text-xl">
        Find out if your friend is getting enough exercise and attention to stay
        healthy and happy! 🐾{" "}
      </p>
      <div className="md:grid-row-2 grid space-y-4 md:grid-cols-2 md:gap-6 md:space-y-0">
        <StateContainer />
      </div>
    </div>
  );
}

export default LandingPage;
