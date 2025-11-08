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
import Tilt from "react-parallax-tilt";
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
        <div className="text-white pt-16 pb-16 overflow-hidden">
            <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
                My <span className="text-cyan-300">Skills</span>
            </h1>

            <div className="flex flex-wrap justify-center gap-6 mt-16 px-4 md:px-0">
                {skills.map((skill, i) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 12,
                            delay: i * 0.07,
                        }}
                        viewport={{ once: true }}
                    >
                        <Tilt
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                            perspective={800}
                            scale={1.05}
                            transitionSpeed={1000}
                            gyroscope={true}
                        >
                            <div className="bg-[#14134160] text-center w-36 h-44 sm:w-40 sm:h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg hover:shadow-[0_0_15px_#00ffff50] transition-all duration-300 ease-out hover:scale-105">
                                <div className="text-4xl sm:text-5xl mb-4 text-gray-300">
                                    {skill.icon}
                                </div>
                                <p className="text-xl sm:text-2xl font-semibold">
                                    {skill.percentage}%
                                </p>
                                <p className="text-purple-400 mt-1 text-sm sm:text-base">
                                    {skill.name}
                                </p>
                            </div>
                        </Tilt>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
