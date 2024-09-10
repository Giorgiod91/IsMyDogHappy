"use client";
import React, { useState } from "react";
import difference from "../HelperFunctions/Calculate";
import { DogRaces } from "../utils/DogRace";

type Props = {};

function TimeToMove({}: Props) {
  const [time, setTime] = useState(0);
  const [isHappy, setIsHappy] = useState(false);
  const safeTheInput = () => {};

  //const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // e.preventDefault();
  //  setTime(value);
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    difference(DogRaces, time, setIsHappy);
  };
  return (
    <div className="flex h-[300px] w-[300px] flex-col items-center rounded-xl border-4 border-[#D3A585] bg-[#FFF8E7] p-5 shadow-lg transition-transform hover:scale-105">
      <h1 className="mb-4 flex items-center space-x-2 text-xl font-semibold text-gray-700">
        ⏰ <span>How Much Time in Total?</span>
      </h1>
      <form className="flex w-full flex-col space-y-4" onSubmit={handleSubmit}>
        <label htmlFor="time" className="text-sm font-medium text-gray-600">
          ⌛ Time (in minutes)
        </label>
        <input
          value={time}
          onChange={(e) => setTime(parseInt(e.target.value))}
          type="number"
          id="time"
          className="rounded-lg border-2 border-blue-500 p-3 text-center text-lg"
          placeholder="Enter time"
        />
        <button
          type="submit"
          className="mt-4 rounded-lg bg-[#FFB54C] py-2 text-white"
        >
          🚀 Set Time
        </button>
        {isHappy ? (
          <p className="text-green-500">Your dog is happy !</p>
        ) : (
          <p className="text-red-500">Your dog is not happy !</p>
        )}
      </form>
    </div>
  );
}

export default TimeToMove;
