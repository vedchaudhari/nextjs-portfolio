"use client";

import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import ParticlesHero from "./ParticleBackground";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden flex-col pt-32 lg:pt-40 pb-20 select-none px-4">

      {/* Background Particles & Grid */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <ParticlesHero />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      {/* Avatar Status Ring */}
      <div className="relative flex flex-col items-center z-10 group">
        <div className="relative w-40 h-40 sm:w-48 sm:h-48">
          {/* Rotating Status Ring */}
          <div className="absolute inset-0 rounded-full border-t-2 border-l-2 border-cyan-500/50 animate-spin-slow" />
          <div className="absolute inset-2 rounded-full border-b-2 border-r-2 border-purple-500/50 animate-spin-slow direction-reverse" />

          {/* Level Badge System */}
          <div className="absolute -top-4 -right-4 z-20">
            <div className="relative group/lvl">
              {/* Rank Tag */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-[8px] font-bold px-1.5 py-0.5 rounded-sm tracking-tighter text-black whitespace-nowrap shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                BACKEND
              </div>

              {/* XP Circle */}
              <svg className="w-16 h-16 sm:w-20 sm:h-20 -rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r="35%"
                  className="stroke-cyan-500/10 fill-none"
                  strokeWidth="4"
                />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="35%"
                  className="stroke-cyan-400 fill-none"
                  strokeWidth="4"
                  strokeDasharray="100"
                  initial={{ strokeDashoffset: 100 }}
                  animate={{ strokeDashoffset: 25 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  strokeLinecap="round"
                />
              </svg>

              {/* Level Number */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#0f142e] border border-cyan-500/50 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-mono font-bold text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover/lvl:scale-110 group-hover/lvl:border-cyan-400 transition-all duration-300">
                  DEV
                </div>
              </div>
            </div>
          </div>

          <Image
            src="/images/s12.png"
            alt="Ved Chaudhari - Avatar"
            fill
            className="rounded-full object-cover border-4 border-[#0f142e] shadow-[0_0_40px_rgba(6,182,212,0.3)]"
            priority
          />
        </div>

        {/* Status Ticker */}
        <div className="mt-6 flex gap-4 text-xs sm:text-sm font-mono text-cyan-200/80 bg-black/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/5 shadow-lg">
          <span>⚡ Available</span>
          <span className="text-white/20">|</span>
          <span>🛠️ Backend Expert</span>
          <span className="text-white/20">|</span>
          <span>📍 Mumbai, India</span>
        </div>
      </div>

      {/* Main Heading */}
      <h1
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-3xl sm:text-5xl md:text-5xl lg:text-7xl mt-8 text-center font-extrabold tracking-tight px-4 leading-tight z-10"
      >
        Backend Engineer building
        <br />
        <span className="bg-linear-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]">
          scalable systems.
        </span>
      </h1>

      {/* Subheading */}
      <h2
        data-aos="fade-up"
        data-aos-delay="400"
        className="
          mt-6 
          text-base sm:text-xl md:text-2xl 
          font-light 
          text-center 
          text-gray-300
          px-4 
          max-w-[800px]
          leading-relaxed
          z-10
        "
      >
        Hi, I’m Ved — I design <span className="text-cyan-200 font-medium">APIs</span>, <span className="text-cyan-200 font-medium">real-time platforms</span>, and <span className="text-cyan-200 font-medium">cloud-native products</span>.
      </h2>

      {/* Tech Stack Line */}
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        className="mt-8 flex flex-wrap justify-center gap-3 px-4 z-10"
      >
        {["Node.js", "Redis", "RabbitMQ", "Docker", "AWS"].map((tech, index) => (
          <span
            key={index}
            className="px-4 py-1.5 text-xs sm:text-sm font-mono text-cyan-300 bg-cyan-950/30 border border-cyan-500/30 rounded focus:ring-2 ring-cyan-500/50 hover:bg-cyan-900/40 transition-all cursor-default shadow-[0_0_10px_rgba(6,182,212,0.1)]"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Button */}
      <motion.button
        whileHover={{
          scale: 1.05,
          backgroundColor: "rgba(6, 182, 212, 0.2)",
          borderColor: "rgba(6, 182, 212, 0.8)",
          boxShadow: "0 0 30px rgba(6, 182, 212, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          const section = document.getElementById("work");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
        data-aos="fade-up"
        data-aos-delay="600"
        className="mt-10 px-8 py-3 bg-cyan-950/40 border border-cyan-500/40 rounded-sm text-lg font-mono text-cyan-300 tracking-wide flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md transition-all group z-10 relative overflow-hidden"
      >
        <span className="relative z-10">VIEW PROJECTS</span>
        <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
        {/* Button Holo Swipe */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-linear-to-r from-transparent via-cyan-500/20 to-transparent transition-transform duration-700 ease-in-out" />
      </motion.button>
    </div>
  );
};

export default Hero;
