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
    <div className="border-6 flex h-[280px] w-[200px] flex-col border shadow-lg transition hover:scale-105">
      <h1 className="p-2 text-center">How much time in total </h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="time" className="mb-2">
          Time
        </label>
        <input
          value={time}
          onChange={(e) => setTime(parseInt(e.target.value))}
          type="number"
          id="time"
          className="rounded border-2 border-orange-500 p-2"
          placeholder="Enter time"
        />
      </form>
    </div>
  );
}

export default TimeToMove;
