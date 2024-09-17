"use client";
import { div } from "framer-motion/client";
import React, { useState } from "react";

type Props = {};

function PartTwo({}: Props) {
  const [clicked, setClicked] = useState(false);
  const trackHashMap = new Map();
  trackHashMap.set({ name: "walking", emoji: "🐕" }, 1);
  trackHashMap.set({ name: "playing", emoji: "./play.png" }, 2);

  return (
    <div className="flex justify-center">
      <h1 className="text-pretty text-7xl font-extrabold text-white">
        {" "}
        What to Track
      </h1>
      {Array.from(trackHashMap).map(([key, value], index) => (
        <div id={index.toString()} className="flex flex-col">
          {key.emoji.includes(".png") ? (
            <img src={key.emoji} alt="" />
          ) : (
            <h1>{key.emoji}</h1>
          )}
        </div>
      ))}
    </div>
  );
}

export default PartTwo;
