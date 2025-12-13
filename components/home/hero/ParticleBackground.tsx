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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          onClick: { enable: !isMobile, mode: "push" }, // Enable click only on desktop
          onHover: { enable: !isMobile, mode: "repulse" }, // Enable hover only on desktop
        },
        modes: {
          push: { quantity: 2 }, // Reduced from 4
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: isMobile ? 0.3 : 0.5, // Lower opacity on mobile
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          speed: isMobile ? 0.5 : 2, // Slower on mobile, normal on desktop
        },
        number: {
          density: { enable: true, area: isMobile ? 1200 : 800 },
          value: isMobile ? 20 : 60, // 20 on mobile, 60 on desktop
        },
        opacity: { value: isMobile ? 0.4 : 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: isMobile ? 3 : 4 } },
      },
      detectRetina: true,
    }),
    [isMobile]
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