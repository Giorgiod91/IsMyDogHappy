"use client";
import React from "react";
import DogRace from "./DogRace";
import TimeToMove from "./TimeToMove";
import StateContainer from "./StateContainer";
import { motion } from "framer-motion";
import PrintsBackground from "./PrintsBackground";

type Props = {};

function LandingPage({}: Props) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      {/* <PrintsBackground printCount={50} /> */}
      <header className="absolute left-0 top-0 flex w-full justify-between p-4">
        <h1 className="text-3xl font-bold">
          PupHappiness{" "}
          <span className="text-yellow-400 opacity-0 lg:opacity-100">🐾</span>
        </h1>
        <nav className="pt-2 lg:pt-0">
          <a href="#features" className="px-4 hover:underline">
            Features
          </a>
          <a href="#about" className="px-4 hover:underline">
            About
          </a>
          <a href="#contact" className="px-4 hover:underline">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
        <div>
          <motion.img
            src="/happy-dog.png"
            alt="Happy Dog"
            className="m-2 w-full max-w-md rounded-lg shadow-lg"
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95, rotate: -2 }}
          />
        </div>
        <h2 className="mb-4 text-5xl font-extrabold">
          Track Your Pup's Joy <span className="text-yellow-400">🐕</span>
        </h2>
        <p className="mb-8 text-xl">
          Experience a new era of innovation and design for your Playful
          friend's happiness! <span className="text-yellow-400">✨</span>
        </p>
        <button className="rounded-lg bg-blue-500 px-6 py-2 text-white transition duration-300 hover:bg-blue-700">
          Get Started <span className="text-yellow-400">🚀</span>
        </button>
      </main>
      <footer className="py-4">
        <p className="text-sm">
          © 2024 PupHappiness. All rights reserved.{" "}
          <span className="text-yellow-400">🐾</span>
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
