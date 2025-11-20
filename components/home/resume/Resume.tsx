"use client";
import React from "react";
import { motion, Variants, Transition } from "framer-motion";
import {
    FaGraduationCap,
    FaSchool,
    FaLaptopCode,
} from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";
import ResumeCard from "./ResumeCard";

// Smooth fade & lift animation
const fadeUp = (i: number) => ({
    initial: { opacity: 0, y: 40, scale: 0.98 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        delay: i * 0.1,
    } satisfies Transition,
    viewport: { once: true },
});


const Resume: React.FC = () => {
    return (
        <div className="pt-20 pb-16 px-4">
            <div className="w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-16">
                {/* Work Experience */}
                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-white">
                        My Work <span className="text-cyan-200">Experience</span>
                    </h1>

                    <div className="mt-10 space-y-8">
                        <motion.div {...fadeUp(0)}>
                            <ResumeCard
                                Icon={SiNodedotjs}
                                role="Node.js Developer - Wharf Street Strategies"
                                description={
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li>
                                            Built and optimized backend systems for real-time apps
                                            like food delivery, ride, and LMS platforms.
                                        </li>
                                        <li>
                                            Developed RESTful APIs and improved performance via
                                            caching and load optimization.
                                        </li>
                                        <li>
                                            Integrated payment gateways and handled secure
                                            transaction workflows.
                                        </li>
                                    </ul>
                                }
                            />
                        </motion.div>

                        <motion.div {...fadeUp(1)}>
                            <ResumeCard
                                Icon={SiNodedotjs}
                                role="Node.js Intern - Wharf Street Studios"
                                description={
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li>
                                            Built real-time in-game communication using Node.js and
                                            Socket.IO for live clan announcements.
                                        </li>
                                        <li>
                                            Integrated MongoDB for efficient chat persistence and
                                            message handling.
                                        </li>
                                        <li>
                                            Worked closely with game devs for seamless
                                            client-server sync.
                                        </li>
                                    </ul>
                                }
                            />
                        </motion.div>

                        <motion.div {...fadeUp(2)}>
                            <ResumeCard
                                Icon={FaLaptopCode}
                                role="Web Dev Intern - TryIO"
                                description={
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li>
                                            Developed and deployed company's official website with
                                            modern UI/UX practices.
                                        </li>
                                        <li>
                                            Focused on responsive design for all screen sizes.
                                        </li>
                                        <li>
                                            Optimized performance for faster load and smooth
                                            interaction.
                                        </li>
                                    </ul>
                                }
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Education */}
                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-white">
                        My <span className="text-cyan-200">Education</span>
                    </h1>

                    <div className="mt-10 space-y-8">
                        <motion.div {...fadeUp(3)}>
                            <ResumeCard
                                Icon={FaGraduationCap}
                                date="Aug 2020 - May 2024"
                                role="Bachelor of Computer Engineering – Rajiv Gandhi Institute of Technology, Mumbai"
                                description={
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li>
                                            Graduated with a Bachelor's in Computer Engineering.
                                        </li>
                                        <li>
                                            Built strong foundation in software development &
                                            databases.
                                        </li>
                                        <li>
                                            Learned modern web technologies through project-based
                                            learning.
                                        </li>
                                    </ul>
                                }
                            />
                        </motion.div>

                        <motion.div {...fadeUp(4)}>
                            <ResumeCard
                                Icon={FaSchool}
                                date="June 2019 – June 2020"
                                role="Intermediate Education – Narayana Junior College, Telangana"
                                description={
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li>Completed intermediate education in core sciences.</li>
                                        <li>Specialized in Mathematics, Physics, and Chemistry.</li>
                                        <li>Developed strong analytical & problem-solving skills.</li>
                                    </ul>
                                }
                            />
                        </motion.div>

                        <motion.div {...fadeUp(5)}>
                            <ResumeCard
                                Icon={FaSchool}
                                date="June 2017 – March 2018"
                                role="Secondary School Certificate (SSC) – Tapti Public School"
                                description={
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li>
                                            Completed SSC with strong fundamentals in Maths and
                                            Science.
                                        </li>
                                        <li>Built analytical and logical reasoning abilities.</li>
                                    </ul>
                                }
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
