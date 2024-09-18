"use client";
import { div, p } from "framer-motion/client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

function PartTwo({}: Props) {
  const [clicked, setClicked] = useState(false);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  // const [flipClicked, setFlipClicked] = useState(false);
  const trackHashMap = new Map();
  trackHashMap.set(
    {
      name: "walking",
      emoji: "🐕",
      description: "walk with your dog 30 to 100 min ",
    },
    2,
  );
  trackHashMap.set({ name: "playing", emoji: "/play.png" }, 3);
  trackHashMap.set({ name: "eating", emoji: "/eat.png" }, 4);
  trackHashMap.set({ name: "sleeping", emoji: "/sleep.png" }, 5);
  trackHashMap.set({ name: "treats", emoji: "🦴" }, 6);
  //sorting the hashmap by value
  const sortedTrackHashMap = Array.from(trackHashMap).sort(
    (a, b) => a[1] - b[1],
  );

  return (
    <div className="mt-20 flex flex-col justify-center space-y-10">
      <h1 className="text-gray text-pretty text-center text-7xl font-extrabold">
        {" "}
        What needs my dog to be happy?{" "}
      </h1>
      <div className="flex flex-col items-center justify-center gap-16 lg:flex-row">
        {Array.from(sortedTrackHashMap).map(([key], index) => (
          <div id={index.toString()} className="flex flex-col">
            {key.emoji.includes(".png") ? (
              <motion.div
                whileHover={{
                  backgroundColor: "#229799",
                  scale: 1.1,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="border-1 flex h-[130px] w-[230px] cursor-pointer flex-col items-center justify-center bg-[#48CFCB] shadow-lg"
              >
                <Image width={100} height={100} src={key.emoji} alt="" />
                <p className="text-white">{key.name}</p>
              </motion.div>
            ) : (
              /* emoji part here */
              <motion.div
                onClick={() =>
                  setClickedIndex(clickedIndex === index ? null : index)
                }
                whileHover={{
                  backgroundColor: "#229799",
                  scale: 1.1,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="border-1 flex h-[130px] w-[230px] cursor-pointer flex-col items-center justify-center bg-[#48CFCB] shadow-lg"
              >
                {" "}
                {clickedIndex == index ? (
                  <div
                    onClick={() =>
                      setClickedIndex(clickedIndex === index ? null : index)
                    }
                  >
                    <p className="text-white">{key.description}</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <span className="cursor-pointer">{key.emoji}</span>
                    <h3 className="text-white">{key.name}</h3>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartTwo;
