"use client";
import React, { useState } from "react";
import difference from "../HelperFunctions/Calculate"; // Ensure this function returns a string

import { DogRaces } from "../utils/DogRace";
import { motion as Motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { string } from "zod";

function TimeToMove() {
  const [time, setTime] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [result, setResult] = useState<string | null>(null);

  //const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // e.preventDefault();
  //  setTime(value);
  // };

  // function to calculate the rest of the time dog would need to be happy depending on users input

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    const selectedDog = DogRaces[currentIndex]; // Get the selected dog from DogRaces based on currentIndex
    const reealTime = time;
    if (selectedDog) {
      const result = difference(reealTime, selectedDog);
      setResult(result);
    } else {
      console.error("Selected dog is undefined");
    }
  };
  return (
    <Motion.div
      initial={{ opacity: 0, x: 300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Card className="h-[465px] w-[345px] bg-[#F3F4F6] shadow-lg">
        <CardHeader>
          <CardTitle className="text-pretty text-center text-2xl font-extrabold text-gray-900">
            ⏰ How Much Time in Total?
          </CardTitle>
          <CardDescription className="text-gray-700">
            How much time does my dog actually need to be happy?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="time" className="font-semibold text-gray-700">
                  Time in minutes
                </Label>
                <Input
                  id="time"
                  placeholder="How much time"
                  onChange={(e) => setTime(parseInt(e.target.value) || 0)}
                  className="border-[#10B981]"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label
                  htmlFor="framework"
                  className="font-semibold text-gray-700"
                >
                  Select Dog Breed
                </Label>
                <Select
                  onValueChange={(value) =>
                    setCurrentIndex(
                      DogRaces.findIndex((dog) => dog.name === value),
                    )
                  }
                >
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {DogRaces.map((dog, index) => (
                      <SelectItem key={index} value={dog.name}>
                        {dog.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleSubmit()}
            className="bg-pretty bg-[#10B981] text-white"
          >
            Show
          </Button>
        </CardFooter>
        {result?.includes("That Dog Is Happy!") ? (
          <div className="flex p-5 text-center font-bold text-[#10B981]">
            {result}{" "}
            <img
              width={50}
              height={50}
              src="./happy-dogTwo.png"
              alt="happy-dog"
            />
          </div>
        ) : (
          <div className="flex text-center font-bold text-[#bb333e]">
            {result}{" "}
            <img width={50} height={50} src="./sad-dog.png" alt="sad-dog" />
          </div>
        )}
      </Card>
    </Motion.div>
  );
}
export default TimeToMove;
