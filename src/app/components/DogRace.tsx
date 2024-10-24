"use client";
import React, { useState } from "react";
import { DogRaces } from "../utils/DogRace";
import { FcRight } from "react-icons/fc";
import { ImGift } from "react-icons/im";
import { DiVim } from "react-icons/di";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { motion as Motion } from "framer-motion";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

//::TODO: add more specifics for the dog races

import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { div, pre } from "framer-motion/client";
import { Car } from "lucide-react";

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
    <Motion.div
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex items-center justify-center space-x-4"
    >
      <BsArrowLeftCircle
        className="h-8 w-8 cursor-pointer text-[#10B981] transition-transform duration-300 hover:text-gray-900"
        onClick={handlePrevious}
        aria-label="Previous Slide"
      />

      <Carousel className="max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="md:h-[465px]">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="flex flex-col items-center">
                      <Motion.img
                        whileInView={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        src={DogRaces[currentIndex]?.img}
                        alt="Dog Race"
                        className="mb-4 h-48 w-full rounded-lg object-cover shadow-md"
                      />
                      <p className="mb-1 text-xl font-medium text-gray-800">
                        {DogRaces[currentIndex]?.name} 🏆
                      </p>
                    </div>
                  </CardContent>

                  <div className="flex w-full flex-col space-y-4 px-4 py-2">
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold text-gray-600">
                        ⚡ Activity Level
                      </p>
                      <progress
                        className="progress progress-accent h-4 w-full rounded"
                        value={DogRaces[currentIndex]?.activity_level}
                        max="100"
                      ></progress>
                    </div>

                    <div className="flex flex-col">
                      <p className="text-sm font-semibold text-gray-600">
                        🏃‍♂️ Exercise Needs
                      </p>
                      <p className="text-sm text-gray-700">
                        {DogRaces[currentIndex]?.exercise_needs ||
                          "Low to Moderate"}
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <p className="text-sm font-semibold text-gray-600">
                        🌱 Life Span
                      </p>
                      <p className="text-sm text-gray-700">
                        {DogRaces[currentIndex]?.life_span || "10-15 years"}
                      </p>
                    </div>

                    <a
                      href={DogRaces[currentIndex]?.learn_more}
                      className="text-blue-500 hover:underline"
                    >
                      Learn more
                    </a>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <BsArrowRightCircle
        className="h-8 w-8 cursor-pointer text-[#10B981] transition-transform duration-300 hover:text-gray-900"
        onClick={handleNext}
        aria-label="Next Slide"
      />
    </Motion.div>
  );
}

export default DogRace;
