"use client";
import { div } from "framer-motion/client";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

function PartTwo({}: Props) {
  const [clicked, setClicked] = useState(false);
  const trackHashMap = new Map();
  trackHashMap.set({ name: "walking", emoji: "🐕" }, 2);
  trackHashMap.set({ name: "playing", emoji: "/play.png" }, 3);

  const sortedTrackHashMap = Array.from(trackHashMap).sort(
    (a, b) => a[1] - b[1],
  );

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-pretty text-center text-7xl font-extrabold text-white">
        {" "}
        What to Track
      </h1>
      <div className="flex flex-col items-center justify-center gap-16 lg:flex-row">
        {Array.from(sortedTrackHashMap).map(([key, value], index) => (
          <div id={index.toString()} className="flex flex-col">
            {key.emoji.includes(".png") ? (
              <div className="flex border-4">
                <Image width={100} height={100} src={key.emoji} alt="" />
              </div>
            ) : (
              <div className="flex border-4">
                <h1>{key.emoji}</h1>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartTwo;
