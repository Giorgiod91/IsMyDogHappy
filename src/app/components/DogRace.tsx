"use client";
import React, { useState } from "react";
import { DogRaces } from "../utils/DogRace";
import { FcRight } from "react-icons/fc";
import { ImGift } from "react-icons/im";
import { DiVim } from "react-icons/di";

import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

function DogRace({ susge, susge2 }: { susge: string; susge2: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === DogRaces.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? DogRaces.length - 1 : prevIndex - 1,
    );
  };

  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="flex flex-col">
                    <img
                      src={DogRaces[currentIndex]?.img}
                      alt="dograce"
                      className="mb-4 h-48 w-full rounded-lg object-cover shadow-md"
                    />
                    <p className="mb-1 text-xl font-medium text-gray-800">
                      {DogRaces[currentIndex]?.name} 🏆
                    </p>
                  </div>
                </CardContent>
                <div className="flex w-full flex-col space-y-2 px-4">
                  <p className="text-sm font-semibold text-gray-600">
                    ⚡ Activity Level
                  </p>
                  <progress
                    className="progress progress-accent w-full"
                    value={DogRaces[currentIndex]?.activity_level}
                    max="100"
                  ></progress>

                  <p className="text-sm font-semibold text-gray-600">
                    🏃‍♂️ Exercise Needs
                  </p>
                  <p className="text-sm text-gray-700">
                    {DogRaces[currentIndex]?.exercise_needs ||
                      "ℹ️ Information not available"}
                  </p>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <button onClick={handlePrevious}> prev</button>

      <CarouselNext onClick={handleNext} />
    </Carousel>
  );
}

export default DogRace;
