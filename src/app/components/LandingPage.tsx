"use client";
import React from "react";
import DogRace from "./DogRace";
import TimeToMove from "./TimeToMove";
import StateContainer from "./StateContainer";
import { motion } from "framer-motion";
import PrintsBackground from "./PrintsBackground";

function LandingPage() {
  return (
    <div className="relative z-0 flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <PrintsBackground printCount={50} />
      <header className="absolute left-0 top-0 z-20 flex w-full justify-between rounded-b-lg bg-gray-900 bg-opacity-70 p-4">
        <h1 className="text-3xl font-bold">
          Pup <span className="text-[#10B981]">Happiness</span>
          <span className="text-yellow-400 opacity-0 lg:opacity-100">🐾</span>
        </h1>
        <nav className="pt-2 lg:pt-0">
          <a
            href="#features"
            className="px-4 font-medium transition duration-300 hover:text-[#10B981]"
          >
            Features
          </a>
          <a
            href="#about"
            className="px-4 font-medium transition duration-300 hover:text-[#10B981]"
          >
            About
          </a>
          <a
            href="#contact"
            className="px-4 font-medium transition duration-300 hover:text-[#10B981]"
          >
            Contact
          </a>
        </nav>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
        <div>
          <motion.img
            src="/happy-dog.png"
            alt="Happy Dog"
            className="relative z-30 m-2 w-full max-w-md rounded-lg shadow-lg"
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95, rotate: -2 }}
          />
        </div>
        <motion.h2
          className="mb-4 text-5xl font-extrabold leading-tight"
          initial={{ y: -100, opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          Track Your Pup's Joy <span className="text-yellow-400">🐕</span>
        </motion.h2>
        <p className="mb-8 text-xl leading-relaxed">
          Experience a new era of innovation and design for your playful
          friend's happiness! <span className="text-yellow-400">✨</span>
        </p>

        <button className="z-40 rounded-lg bg-[#10B981] px-6 py-2 text-white transition duration-300 hover:bg-gray-600">
          Get Started <span className="text-yellow-400">🚀</span>
        </button>
      </main>
      <footer className="w-full rounded-t-lg bg-gray-900 bg-opacity-70 py-4 text-center">
        <p className="text-sm">
          © 2024 PupHappiness. All rights reserved.{" "}
          <span className="text-yellow-400">🐾</span>
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
