// components/ParticlesHero.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

// Need to install @tsparticles/react , @tsparticles/engine and @tsparticles/slim packages
// npm install @tsparticles/react @tsparticles/engine @tsparticles/slim

export default function ParticlesHero() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "transparent" },
      },
      fullScreen: {
        enable: false,
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: false, mode: "push" }, // Disabled heavy click interaction
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.3, // Lower opacity for better performance
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          speed: 1, // Slower movement is less taxing
        },
        number: {
          density: { enable: true, area: 1200 }, // Increased area to spread them out more
          value: 60, // Reduced from 60
        },
        opacity: { value: 0.4 }, // Lower opacity
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } }, // Slightly smaller particles
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="absolute inset-0 "
    />
  );
}