'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Github, Globe } from 'lucide-react'
import Tilt from 'react-parallax-tilt'

const projects = [
    {
        img: '/images/p1.jpg',
        title: 'Dentwise.ai - Modern Dental AI Assistant',
        subtitle: 'Web App + AI Integration',
        github: 'https://github.com/vedchaudhari/dentwise',
        live: 'https://dentwise-ai.vercel.app',
        delay: 0
    },
    {
        img: '/images/p2.jpg',
        title: 'Convochat - Real Time Chat Application',
        subtitle: 'Full-Stack Web Application',
        github: 'https://github.com/vedchaudhari/convochat',
        live: 'https://convochat-app.onrender.com/',
        delay: 0.1
    },
    {
        img: '/images/p3.jpg',
        title: 'Static E-Commerce Website',
        subtitle: 'Web Development, UI Design',
        github: 'https://github.com/vedchaudhari/E-commerce',
        live: 'https://ved-ecommerce.netlify.app/',
        delay: 0.2
    }
]

const Projects = () => {
    return (
        <div className="pt-16 pb-16 px-4">
            <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
                A small selection of recent <br />
                <span className="text-cyan-300">projects</span>
            </h1>

            <div className="w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-16">
                {projects.map((project, index) => (
                    <div key={index} data-aos="fade-up" data-aos-delay={project.delay * 1000}>
                        <Tilt
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                            perspective={1000}
                            scale={1.02}
                            transitionSpeed={1000}
                            gyroscope={true}
                            className="h-full"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: project.delay }}
                                className="glass-effect h-full rounded-xl p-4 sm:p-6 hover:shadow-[0_20px_50px_rgba(6,182,212,0.3)] transition-all duration-300 group border border-white/10 hover:border-cyan-400/50 relative overflow-hidden"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* 3D Depth Effect Layer */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className='overflow-hidden rounded-lg relative shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-500' style={{ transform: 'translateZ(20px)' }}>
                                    <Image
                                        src={project.img}
                                        alt={project.title}
                                        width={800}
                                        height={650}
                                        className="rounded-lg group-hover:scale-110 transition-transform duration-500 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                                </div>

                                <div style={{ transform: 'translateZ(30px)' }}>
                                    <h1 className="mt-6 text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-md">
                                        {project.title}
                                    </h1>
                                    <h2 className="pt-2 font-medium text-white/70 text-sm sm:text-base group-hover:text-white/90 transition-colors">{project.subtitle}</h2>

                                    <div className="flex gap-3 sm:gap-4 mt-6 flex-wrap">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-5 py-2.5 bg-cyan-900/40 hover:bg-cyan-600 border border-cyan-500/30 hover:border-cyan-400 rounded-lg text-white text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] backdrop-blur-sm"
                                        >
                                            <Github size={18} /> <span className="font-medium">GitHub</span>
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-lg text-white text-sm transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                                        >
                                            <Globe size={18} /> <span className="font-medium">Live Demo</span>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </Tilt>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
