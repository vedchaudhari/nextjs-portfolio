'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Github, Globe } from 'lucide-react'

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
        <div className="pt-16 pb-16">
            <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
                A small selection of recent <br />
                <span className="text-cyan-300">projects</span>
            </h1>

            <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: project.delay }}
                        whileHover={{ scale: 1.03 }}
                        className="bg-white/5 backdrop-blur-lg rounded-xl p-4 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-shadow"
                    >
                        <Image
                            src={project.img}
                            alt={project.title}
                            width={800}
                            height={650}
                            className="rounded-lg"
                        />
                        <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                            {project.title}
                        </h1>
                        <h2 className="pt-2 font-medium text-white/80">{project.subtitle}</h2>

                        <div className="flex gap-4 mt-4">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-white text-sm transition"
                            >
                                <Github size={18} /> GitHub
                            </a>
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition"
                            >
                                <Globe size={18} /> Live
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Projects
