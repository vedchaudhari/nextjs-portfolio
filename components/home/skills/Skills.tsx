"use client";
import React from "react";
import {
    SiGithub,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostman,
    SiReact,
    SiRedis,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
    SiAmazon,
    SiDocker,
    SiGooglecloud,
    SiRabbitmq,
    SiGithubactions,
} from "react-icons/si";

import { motion } from "framer-motion";

const skills = [
    { name: "Node.js", icon: <SiNodedotjs />, category: "Backend" },
    { name: "RabbitMQ", icon: <SiRabbitmq />, category: "Messaging" },
    { name: "Redis", icon: <SiRedis />, category: "Caching" },
    { name: "MongoDB", icon: <SiMongodb />, category: "Database" },
    { name: "AWS", icon: <SiAmazon />, category: "Cloud" },
    { name: "Docker", icon: <SiDocker />, category: "DevOps" },
    { name: "CI/CD", icon: <SiGithubactions />, category: "DevOps" },
    { name: "Nginx", icon: <SiVercel />, category: "DevOps" }, // Using Vercel icon as placeholder or generic
    { name: "Git", icon: <SiGithub />, category: "DevOps" },
    { name: "React.js", icon: <SiReact />, category: "Frontend" },
    { name: "Next.js", icon: <SiNextdotjs />, category: "Frontend" },
    { name: "React Native", icon: <SiReact />, category: "Frontend" },
    { name: "TypeScript", icon: <SiTypescript />, category: "Language" },
    { name: "JavaScript", icon: <SiJavascript />, category: "Language" },
];

const Skills = () => {
    return (
        <div className="text-white pt-16 pb-16 overflow-hidden px-4 relative">
            {/* Decoration: Tech Lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500/20 to-transparent" />

            <h1 className="text-center text-3xl md:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Technical <span className="bg-linear-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">Skills</span>
            </h1>
            <p className="text-center text-cyan-400/60 font-mono text-sm mb-12 uppercase tracking-widest">[ Technologies & Tools ]</p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-2 md:px-4 max-w-[1200px] mx-auto">
                {skills.map((skill, i) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.3,
                            delay: i * 0.05,
                        }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        {/* Connecting Lines for "Tech Tree" feel */}
                        {i > 0 && (
                            <div className="absolute top-1/2 -left-3 w-3 h-[2px] bg-cyan-900/40 hidden sm:block -z-10" />
                        )}

                        <div className="holo-card bg-[#0f142e]/80 w-28 h-32 sm:w-36 sm:h-40 rounded-xl flex flex-col items-center justify-center relative hover:-translate-y-2 transition-transform duration-300 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] border-t border-l border-white/10">

                            {/* Corner Accents */}
                            <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-cyan-500/50" />
                            <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-cyan-500/50" />

                            {/* Icon with Glitch-like Hover */}
                            <div className="text-4xl sm:text-5xl mb-3 text-cyan-500/80 group-hover:text-cyan-300 transition-colors duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">
                                {skill.icon}
                            </div>

                            {/* Text Info */}
                            <div className="text-center z-10 w-full px-2">
                                <p className="text-[10px] uppercase font-mono text-cyan-700 group-hover:text-cyan-400 transition-colors">
                                    {skill.category}
                                </p>
                                <p className="text-xs sm:text-sm font-bold text-gray-300 mt-1 truncate group-hover:text-white">
                                    {skill.name}
                                </p>
                            </div>

                            {/* Hover "Equip" Overlay */}
                            <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
