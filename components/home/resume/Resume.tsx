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
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
        duration: 0.5,
        delay: i * 0.1,
    } satisfies Transition,
    viewport: { once: true },
});


const Resume: React.FC = () => {
    return (
        <div className="pt-20 pb-16 px-4 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-20 left-0 w-full h-[500px] bg-cyan-900/10 blur-[100px] -z-10" />

            <div className="w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-20">
                {/* Work Experience */}
                <div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-12 flex items-center gap-4">
                        <span className="w-12 h-2 bg-cyan-500 rounded-full shadow-[0_0_20px_cyan]" />
                        Work <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Experience</span>
                    </h1>

                    <div className="relative space-y-12 pl-8 sm:pl-12">
                        {/* Connecting Line */}
                        <div className="absolute left-[19px] sm:left-[23px] top-4 bottom-0 w-1 bg-linear-to-b from-cyan-500 via-blue-500 to-purple-600 shadow-[0_0_15px_rgba(6,182,212,0.4)]" />

                        <motion.div {...fadeUp(0)} className="relative group">
                            {/* Node Icon on Line */}
                            <div className="absolute -left-[45px] sm:-left-[49px] top-0 w-14 h-14 bg-[#0f142e] border-4 border-cyan-500 rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(6,182,212,0.6)] group-hover:scale-110 transition-transform duration-300">
                                <SiNodedotjs className="w-7 h-7 text-cyan-300" />
                            </div>
                            <ResumeCard
                                date="Jan 2025 - Present"
                                role="Node.js Developer - Wharf Street Strategies"
                                description={
                                    <ul className="list-disc pl-5 space-y-2 text-white/70 text-sm sm:text-base leading-relaxed">
                                        <li>
                                            Built and maintained backend APIs for a Learning Management System (LMS) serving <span className="text-cyan-300 font-medium">10,000+ users</span>, managing enrollments, <span className="text-cyan-300 font-medium">authentication</span>, and <span className="text-cyan-300 font-medium">role-based access control</span>.
                                        </li>
                                        <li>
                                            Added <span className="text-cyan-300 font-medium">real-time order tracking</span> for a food delivery application using <span className="text-cyan-300 font-medium">Socket.IO</span>, enabling live status updates and location sharing.
                                        </li>
                                        <li>
                                            Optimized <span className="text-cyan-300 font-medium">MongoDB queries</span> and introduced a <span className="text-cyan-300 font-medium">Redis caching layer</span>, reducing average <span className="text-cyan-300 font-medium">API response time</span> from <span className="text-cyan-300 font-medium">300ms to 25ms</span>.
                                        </li>
                                        <li>
                                            Integrated <span className="text-cyan-300 font-medium">payment gateway APIs</span> with secure <span className="text-cyan-300 font-medium">webhook handling</span> and structured logs to improve transaction reliability and debugging.
                                        </li>
                                        <li>
                                            Dockerized services and set up <span className="text-cyan-300 font-medium">GitHub Actions CI/CD</span> on <span className="text-cyan-300 font-medium">AWS EC2</span> to automate builds and deployments.
                                        </li>
                                    </ul>
                                }
                            />
                        </motion.div>

                        <motion.div {...fadeUp(1)} className="relative group">
                            {/* Node Icon on Line */}
                            <div className="absolute -left-[45px] sm:-left-[49px] top-0 w-14 h-14 bg-[#0f142e] border-4 border-blue-500 rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(59,130,246,0.6)] group-hover:scale-110 transition-transform duration-300">
                                <SiNodedotjs className="w-7 h-7 text-blue-300" />
                            </div>
                            <ResumeCard
                                date="Oct 2024 - Jan 2025"
                                role="Node.js Backend Intern - Wharf Street Studios"
                                description={
                                    <ul className="list-disc pl-5 space-y-2 text-white/70 text-sm sm:text-base leading-relaxed">
                                        <li>
                                            Implemented backend features for user groups, <span className="text-cyan-300 font-medium">RBAC</span>, and leaderboards using <span className="text-cyan-300 font-medium">Node.js</span> and <span className="text-cyan-300 font-medium">MongoDB</span>.
                                        </li>
                                        <li>
                                            Added <span className="text-cyan-300 font-medium">WebSocket-based</span> real-time updates for live events and gameplay sessions.
                                        </li>
                                        <li>
                                            Improved <span className="text-cyan-300 font-medium">database performance</span> by creating indexes and optimizing <span className="text-cyan-300 font-medium">Mongoose queries</span> on high-traffic APIs.
                                        </li>
                                        <li>
                                            Assisted in debugging <span className="text-cyan-300 font-medium">production issues</span> and shipping fixes to improve application stability.
                                        </li>
                                    </ul>
                                }
                            />
                        </motion.div>

                        <motion.div {...fadeUp(2)} className="relative group">
                            {/* Node Icon on Line */}
                            <div className="absolute -left-[45px] sm:-left-[49px] top-0 w-14 h-14 bg-[#0f142e] border-4 border-purple-500 rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(168,85,247,0.6)] group-hover:scale-110 transition-transform duration-300">
                                <FaLaptopCode className="w-7 h-7 text-purple-300" />
                            </div>
                            <ResumeCard
                                role="Web Dev Intern - TryIO"
                                description={
                                    <ul className="list-disc pl-5 space-y-2 text-white/70 text-sm sm:text-base leading-relaxed">
                                        <li>
                                            Developed and deployed the company's official website using React and Node.js.
                                        </li>
                                        <li>
                                            Implemented responsive design ensuring compatibility across all device types.
                                        </li>
                                        <li>
                                            Optimized frontend performance, improving page load speeds by 30%.
                                        </li>
                                    </ul>
                                }
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Education */}
                <div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-12 flex items-center gap-4">
                        <span className="w-12 h-2 bg-purple-500 rounded-full shadow-[0_0_20px_purple]" />
                        My <span className="bg-linear-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">Education</span>
                    </h1>

                    <div className="relative space-y-12 pl-8 sm:pl-12">
                        {/* Connecting Line */}
                        <div className="absolute left-[19px] sm:left-[23px] top-4 bottom-0 w-1 bg-linear-to-b from-purple-500 via-pink-500 to-red-500 shadow-[0_0_15px_rgba(168,85,247,0.4)]" />

                        <motion.div {...fadeUp(3)} className="relative group">
                            <div className="absolute -left-[45px] sm:-left-[49px] top-0 w-14 h-14 bg-[#0f142e] border-4 border-purple-500 rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(168,85,247,0.6)] group-hover:scale-110 transition-transform duration-300">
                                <FaGraduationCap className="w-7 h-7 text-purple-300" />
                            </div>
                            <ResumeCard
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

                        <motion.div {...fadeUp(4)} className="relative group">
                            <div className="absolute -left-[45px] sm:-left-[49px] top-0 w-14 h-14 bg-[#0f142e] border-4 border-pink-500 rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(236,72,153,0.6)] group-hover:scale-110 transition-transform duration-300">
                                <FaSchool className="w-7 h-7 text-pink-300" />
                            </div>
                            <ResumeCard
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

                        <motion.div {...fadeUp(5)} className="relative group">
                            <div className="absolute -left-[45px] sm:-left-[49px] top-0 w-14 h-14 bg-[#0f142e] border-4 border-red-500 rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(239,68,68,0.6)] group-hover:scale-110 transition-transform duration-300">
                                <FaSchool className="w-7 h-7 text-red-300" />
                            </div>
                            <ResumeCard
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
