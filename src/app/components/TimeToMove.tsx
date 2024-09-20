"use client";
import React, { useState } from "react";
import difference from "../HelperFunctions/Calculate";
import { DogRaces } from "../utils/DogRace";

type Props = {};

function TimeToMove({}: Props) {
  const [time, setTime] = useState(0);
  const [susge, setSusge] = useState("");
  const [susge2, setSusge2] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const safeTheInput = () => {};
  //const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // e.preventDefault();
  //  setTime(value);
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (DogRaces[currentIndex]) {
      difference([DogRaces[currentIndex]], time, setSusge, setSusge2);
    }
  };
  return (
    <div className="flex h-[350px] w-[350px] flex-col items-center rounded-3xl border border-gray-300 bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
      <h1 className="mb-4 text-2xl font-semibold text-gray-800">
        ⏰ How Much Time in Total?
      </h1>
      <form className="flex w-full flex-col space-y-6" onSubmit={handleSubmit}>
        <label htmlFor="time" className="text-sm font-medium text-gray-500">
          ⌛ Time (in minutes)
        </label>
        <input
          value={time}
          onChange={(e) => setTime(parseInt(e.target.value))}
          type="number"
          id="time"
          className="rounded-lg border border-gray-200 p-3 text-center text-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#10B981]"
          placeholder="Enter time"
        />
        <button
          type="submit"
          className="mt-4 w-full rounded-lg bg-[#10B981] py-3 text-lg text-white transition-all duration-300 hover:bg-[#229799] hover:shadow-md"
        >
          🚀 Set Time
        </button>
      </form>

      {susge && <p className="mt-4 text-sm text-red-500">{susge}</p>}
      {susge2 && <p className="mt-4 text-sm text-green-500">{susge2}</p>}
    </div>
  );
}
export default TimeToMove;
