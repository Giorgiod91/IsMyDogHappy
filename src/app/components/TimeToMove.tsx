"use client";
import React, { useState } from "react";

type Props = {};

function TimeToMove({}: Props) {
  const [time, setTime] = useState(0);

  const safeTheInput = () => {};

  //const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // e.preventDefault();
  //  setTime(value);
  // };

  const handleSubmit = () => {};
  return (
    <div className="flex h-[300px] w-[300px] flex-col items-center rounded-xl border-4 bg-[#FFDBB5] p-5 shadow-lg transition-transform hover:scale-105">
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
          className="mt-4 w-full rounded-lg bg-blue-500 py-2 text-white transition-all duration-300 hover:bg-blue-600"
        >
          🚀 Set Time
        </button>
      </form>
    </div>
  );
}

export default TimeToMove;
