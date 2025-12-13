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
} from "react-icons/si";

import { motion } from "framer-motion";

const skills = [
    { name: "Javascript", icon: <SiJavascript />, percentage: 89 },
    { name: "React.Js", icon: <SiReact />, percentage: 92 },
    { name: "Next.Js", icon: <SiNextdotjs />, percentage: 88 },
    { name: "Node.Js", icon: <SiNodedotjs />, percentage: 90 },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, percentage: 94 },
    { name: "Typescript", icon: <SiTypescript />, percentage: 86 },
    { name: "MongoDB", icon: <SiMongodb />, percentage: 85 },
    { name: "Redis", icon: <SiRedis />, percentage: 80 },
    { name: "API Testing", icon: <SiPostman />, percentage: 87 },
    { name: "Git", icon: <SiGithub />, percentage: 85 },
    { name: "Deployment", icon: <SiVercel />, percentage: 80 },
];

const Skills = () => {
    return (
        <div className="text-white pt-16 pb-16 overflow-hidden px-4">
            <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
                My <span className="text-cyan-300">Skills</span>
            </h1>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-16 px-2 md:px-4">
                {skills.map((skill, i) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.4,
                            delay: i * 0.05,
                        }}
                        viewport={{ once: true }}
                    >
                        <div className="glass-effect text-center w-32 h-40 sm:w-40 sm:h-48 md:w-44 md:h-52 rounded-3xl flex flex-col items-center justify-center shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 ease-out hover:-translate-y-2 group relative overflow-hidden border border-white/5 hover:border-cyan-500/30">
                            <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-gray-300 group-hover:text-cyan-300 transition-colors duration-300 group-hover:scale-110 relative z-10">
                                {skill.icon}
                            </div>
                            <div>
                                <p className="text-xl sm:text-2xl font-semibold group-hover:text-cyan-200 transition-colors duration-300">
                                    {skill.percentage}%
                                </p>
                                <p className="text-purple-400 mt-1 text-xs sm:text-sm md:text-base px-2 group-hover:text-purple-300 transition-colors duration-300">
                                    {skill.name}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
