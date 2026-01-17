'use client'
import Image from 'next/image'
import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Globe, ChevronLeft, ChevronRight, Play } from 'lucide-react'


const projects = [
    {
        images: ['/images/microblog0.jpg', '/images/microblog1.jpg', '/images/microblog2.jpg', '/images/microblog3.jpg'],
        title: 'Micro Blog Application',
        subtitle: 'Full Stack Microservices based Blog Platform',
        tech: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL', 'RabbitMQ', 'Redis', 'Docker', 'AWS', 'GitHub Actions', 'CI/CD', 'Hostinger', 'Nginx'],
        github: 'https://github.com/vedchaudhari/micro-blog',
        live: 'https://blogmicro.vercel.app',
        delay: 0
    },
    {
        images: [
            '/images/readsphere/readsphere0.jpg',
            '/images/readsphere/readsphere1.jpg',
            '/images/readsphere/readsphere2.jpg',
            '/images/readsphere/readsphere3.jpg',
            '/images/readsphere/readsphere4.jpg',
            '/images/readsphere/readsphere5.jpg',
            '/images/readsphere/readsphere6.jpg',
            '/images/readsphere/readsphere7.jpg',
            '/images/readsphere/readsphere8.jpg',
            '/images/readsphere/readsphere9.jpg',
        ],
        title: 'Readsphere',
        subtitle: 'React Native Mobile App',
        tech: ['React Native', 'Expo', 'JavaScript', 'Node.js', 'Docker', 'AWS', 'GitHub Actions', 'CI/CD', 'Nginx'],
        github: 'https://github.com/vedchaudhari/rn-bookworm',
        playLive: 'https://appetize.io/app/b_vbm72mjfxqsjl6siend6w2hzo4',
        live: 'https://expo.dev/accounts/vedchaudhari07/projects/mobile/builds/7e517c21-b346-4939-8bfa-e6bde41c32cb',
        liveLabel: 'Android Build',
        delay: 0.1
    },
    {
        images: ['/images/chat0.jpg', '/images/chat1.png', '/images/chat2.png', '/images/chat3.png'],
        title: 'Convochat - Real Time Chat Application',
        subtitle: 'Full-Stack Web Application',
        tech: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
        github: 'https://github.com/vedchaudhari/convochat',
        live: 'https://convochat-app.onrender.com/',
        delay: 0.2
    },
    // {
    //     images: ['/images/p3.jpg', '/images/p3.jpg', '/images/p3.jpg'],
    //     title: 'Static E-Commerce Website',
    //     subtitle: 'Web Development, UI Design',
    //     tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    //     github: 'https://github.com/vedchaudhari/E-commerce',
    //     live: 'https://ved-ecommerce.netlify.app/',
    //     delay: 0.3
    // }
]

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <div data-aos="fade-up" data-aos-delay={project.delay * 1000}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project.delay }}
                className="glass-effect h-full rounded-xl p-4 sm:p-6 hover:shadow-[0_10px_30px_rgba(6,182,212,0.2)] transition-all duration-300 group border border-white/10 hover:border-cyan-400/50 relative overflow-hidden flex flex-col hover:-translate-y-1"
            >
                <div className='overflow-hidden rounded-lg relative shadow-md group-hover:shadow-cyan-500/20 transition-all duration-500 aspect-[1.23/1]'>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={project.images[currentImageIndex]}
                                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                fill
                                className={`rounded-lg group-hover:scale-105 transition-transform duration-500 ${project.title === 'Readsphere' ? 'object-contain' : 'object-cover'}`}
                            />
                        </motion.div>
                    </AnimatePresence>

                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />

                    {project.images.length > 1 && (
                        <React.Fragment>
                            <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto z-10"
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto z-10"
                                aria-label="Next image"
                            >
                                <ChevronRight size={20} />
                            </button>
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                                {project.images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                            }`}
                                    />
                                ))}
                            </div>
                        </React.Fragment>
                    )}
                </div>

                <div className="flex-grow flex flex-col">
                    <h1 className="mt-6 text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-md">
                        {project.title}
                    </h1>
                    <h2 className="pt-2 font-medium text-white/70 text-sm sm:text-base group-hover:text-white/90 transition-colors">{project.subtitle}</h2>

                    <div className="flex flex-wrap gap-2 mt-6 mb-4">
                        {/* @ts-ignore */}
                        {project.tech?.map((tech, i) => (
                            <span key={i} className="text-xs px-2 py-1 bg-cyan-900/30 text-cyan-200 rounded border border-cyan-500/20">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-3 sm:gap-4 mt-auto flex-wrap">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 bg-cyan-900/40 hover:bg-cyan-600 border border-cyan-500/30 hover:border-cyan-400 rounded-lg text-white text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] backdrop-blur-sm"
                        >
                            <Github size={18} /> <span className="font-medium">GitHub</span>
                        </a>
                        {/* @ts-ignore */}
                        {project.playLive && (
                            <a
                                href={project.playLive}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-lg text-white text-sm transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                            >
                                <Play size={18} /> <span className="font-medium">Play Live</span>
                            </a>
                        )}
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-lg text-white text-sm transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                        >
                            <Globe size={18} /> <span className="font-medium">
                                {/* @ts-ignore */}
                                {project.liveLabel || 'Live Demo'}
                            </span>
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

const Projects = () => {
    return (
        <div className="pt-16 pb-16 px-4">
            <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
                A small selection of recent <br />
                <span className="text-cyan-300">projects</span>
            </h1>

            <div className="w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-16">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </div>
    )
}

export default Projects
