"use client";
import { div, p } from "framer-motion/client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

function PartTwo({}: Props) {
  const [clicked, setClicked] = useState(false);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [hoverClicked, setHoverClicked] = useState(false);
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
  trackHashMap.set(
    {
      name: "playing",
      emoji: "/play.png",
      description:
        "depending on the race u have to play at least 30 mins a day",
    },
    3,
  );
  trackHashMap.set(
    {
      name: "eating",
      emoji: "/eat.png",
      description:
        "your dog needs at least wet food once a day and dry foot aswell",
    },
    4,
  );
  trackHashMap.set(
    {
      name: "sleeping",
      emoji: "/sleep.png",
      description:
        "if u played enough and walked enough with your dog he will sleep up to 18 hours a day",
    },
    5,
  );
  trackHashMap.set(
    {
      name: "treats",
      emoji: "🦴",
      description:
        "treats are important aswell u can use them as a reward aswell",
    },
    6,
  );
  //sorting the hashmap by value
  const sortedTrackHashMap = Array.from(trackHashMap).sort(
    (a, b) => a[1] - b[1],
  );

  return (
    <div className="mt-20 flex flex-col justify-center space-y-10">
      <h1 className="text-pretty text-center text-4xl font-extrabold text-gray-900 md:text-7xl">
        What does my dog need to be happy?
      </h1>
      <p className="text-center font-extralight">
        {" "}
        You can Click those Cards!{" "}
      </p>
      <div className="flex items-center gap-16 md:flex-row md:justify-center">
        {Array.from(sortedTrackHashMap).map(([key], index) => (
          <div id={index.toString()} className="flex flex-col">
            {key.emoji.includes(".png") ? (
              <motion.div
                onClick={() =>
                  setClickedIndex(clickedIndex === index ? null : index)
                }
                whileHover={{
                  backgroundColor: "#10B981",
                  scale: 1.1,
                  boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
                }}
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                  ease: "easeOut",
                }}
                className="border-1 flex cursor-pointer flex-col items-center justify-center rounded-lg bg-[#F3F4F6] shadow-lg md:h-[130px] md:w-[230px]"
              >
                {" "}
                {clickedIndex == index ? (
                  <div
                    onClick={() =>
                      setClickedIndex(clickedIndex === index ? null : index)
                    }
                  >
                    <p className="p-3 font-semibold text-gray-700">
                      {key.description}
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <Image width={100} height={100} src={key.emoji} alt="" />
                    <p className="font-extrabold text-gray-700">{key.name}</p>
                  </div>
                )}
              </motion.div>
            ) : (
              /* emoji part*/
              <motion.div
                onClick={() =>
                  setClickedIndex(clickedIndex === index ? null : index)
                }
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  backgroundColor: "#10B981",
                  scale: 1.1,
                  boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                  ease: "easeOut",
                }}
                className="border-1 flex h-[130px] w-[230px] cursor-pointer flex-col items-center justify-center rounded-lg bg-[#F3F4F6] font-extrabold shadow-lg"
              >
                {clickedIndex == index ? (
                  <div
                    onClick={() =>
                      setClickedIndex(clickedIndex === index ? null : index)
                    }
                  >
                    <p className="p-3 font-semibold text-gray-700">
                      {key.description}
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <span className="cursor-pointer text-2xl">{key.emoji}</span>
                    <h3 className="text-gray-700">{key.name}</h3>
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
