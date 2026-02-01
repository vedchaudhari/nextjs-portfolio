'use client'
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Globe, ChevronLeft, ChevronRight, Play } from 'lucide-react'


const projects = [
    {
        images: ['/images/microblog0.jpg', '/images/microblog1.jpg', '/images/microblog2.jpg', '/images/microblog3.jpg'],
        title: 'Microservices Blogging Platform',
        subtitle: 'Event-driven architecture utilizing RabbitMQ and Redis for asynchronous processing and high-performance caching.',
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
        subtitle: 'Scalable mobile platform with Node.js backend on AWS EC2, featuring optimized content delivery via Nginx and Docker.',
        tech: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Docker', 'AWS', 'GitHub Actions', 'CI/CD', 'Nginx'],
        github: 'https://github.com/vedchaudhari/rn-bookworm',
        playLive: 'https://appetize.io/app/b_hyut3u3m5x5sns3lrhduhsmr5e',
        live: 'https://expo.dev/accounts/vedchaudhari/projects/readsphere/builds/712cda94-ff52-411f-8a90-1b0882e910c0',
        liveLabel: 'Android Build',
        delay: 0.1
    },
    {
        images: ['/images/chat0.jpg', '/images/chat1.png', '/images/chat2.png', '/images/chat3.png'],
        title: 'Convochat - Real Time Messaging',
        subtitle: 'Low-latency chat infrastructure powered by WebSockets (Socket.IO) and sharded MongoDB clusters.',
        tech: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'JavaScript'],
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

// Utility for wrapping index (0..n)
const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

const calculateDelay = (index: number) => {
    return index * 0.1; // Staggered entrance
};

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
    // We use a tuple [page, direction] to track the infinite pagination
    const [[page, direction], setPage] = useState([0, 0]);

    // We map the potentially infinite "page" to a bounded "imageIndex"
    const imageIndex = wrap(0, project.images.length, page);

    const [isHovered, setIsHovered] = useState(false);

    // Auto-slide functionality
    useEffect(() => {
        if (project.images.length <= 1 || isHovered) return;

        const interval = setInterval(() => {
            paginate(1);
        }, 5000); // Auto-slide every 5 seconds

        return () => clearInterval(interval);
    }, [page, isHovered, project.images.length]);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    // Animation variants
    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                x: { type: "spring" as const, stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 }
            }
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95,
            transition: {
                x: { type: "spring" as const, stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 }
            }
        })
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: calculateDelay(index) }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative flex flex-col h-full bg-white/3 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/40 transition-all duration-500 shadow-2xl p-4 sm:p-5"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Mesh Gradient Glow */}
            <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative w-full aspect-16/10 sm:aspect-1.4/1 bg-black/40 rounded-xl overflow-hidden border border-white/5 shadow-inner">
                {/* HUD Decorators */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-cyan-500/20 rounded-tl-xl pointer-events-none z-20" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-purple-500/20 rounded-br-xl pointer-events-none z-20" />
                <div className="absolute top-3 right-4 text-[9px] font-mono text-cyan-500/40 hidden sm:block z-20">PROJECT_ID: {String(index + 1).padStart(2, '0')}</div>

                {/* Status Badge */}
                <div className="absolute top-3 left-3 z-20 bg-green-500/10 backdrop-blur-md border border-green-500/30 text-green-400 text-[9px] font-bold px-2 py-0.5 rounded shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                    PRODUCTION READY
                </div>

                {/* Carousel Container */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-gray-900">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={page}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                        >
                            <Image
                                src={project.images[imageIndex]}
                                alt={`${project.title} - Preview ${imageIndex + 1}`}
                                fill
                                priority={index < 2 && imageIndex === 0}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-contain select-none pointer-events-none p-1 md:p-2"
                                draggable={false}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Arrows (Desktop) */}
                {project.images.length > 1 && (
                    <>
                        <button
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 text-cyan-400 border border-white/10 hover:bg-cyan-900/60 hover:text-white hover:border-cyan-400/50 transition-all opacity-0 group-hover:opacity-100 hidden sm:flex items-center justify-center backdrop-blur-sm"
                            onClick={() => paginate(-1)}
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 text-cyan-400 border border-white/10 hover:bg-cyan-900/60 hover:text-white hover:border-cyan-400/50 transition-all opacity-0 group-hover:opacity-100 hidden sm:flex items-center justify-center backdrop-blur-sm"
                            onClick={() => paginate(1)}
                            aria-label="Next image"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </>
                )}

                {/* Dots Indicators */}
                {project.images.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-sm border border-white/5">
                        {project.images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage([page + (i - imageIndex), i - imageIndex])}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === imageIndex
                                    ? 'bg-cyan-400 shadow-[0_0_8px_cyan] scale-125'
                                    : 'bg-white/20 hover:bg-white/50'
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="flex flex-col grow pt-6 relative z-10">
                <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">{project.title}</h3>
                </div>

                <p className="text-sm text-cyan-100/70 mb-4 line-clamp-2 min-h-[2.5em]">{project.subtitle}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {/* @ts-ignore */}
                    {project.tech?.slice(0, 4).map((tech, i) => (
                        <span key={i} className="px-2 py-1 text-[10px] uppercase font-medium tracking-wider text-cyan-300 bg-cyan-950/30 border border-cyan-500/20 rounded shadow-[0_0_5px_rgba(6,182,212,0.05)]">
                            {tech}
                        </span>
                    ))}
                    {/* @ts-ignore */}
                    {project.tech?.length > 4 && (
                        <span className="px-2 py-1 text-[10px] text-cyan-500/70 border border-cyan-500/10 rounded">+{project.tech.length - 4}</span>
                    )}
                </div>

                <div className="mt-auto flex gap-3">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded text-sm text-gray-300 transition-all group/btn"
                    >
                        <Github size={16} className="text-gray-400 group-hover/btn:text-white transition-colors" />
                        <span className="font-mono text-xs uppercase">Source</span>
                    </a>

                    {/* @ts-ignore */}
                    {project.playLive && (
                        <a
                            href={project.playLive}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 hover:border-cyan-500/40 rounded text-sm text-cyan-300 transition-all group/btn shadow-[0_0_10px_rgba(6,182,212,0.1)]"
                        >
                            <Play size={16} />
                            <span className="font-mono text-xs uppercase">Demo</span>
                        </a>
                    )}

                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500/30 hover:border-cyan-400/60 rounded text-sm text-cyan-200 transition-all group/btn shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                    >
                        <Globe size={16} />
                        <span className="font-mono text-xs uppercase">
                            {/* @ts-ignore */}
                            {project.liveLabel ? 'Deploy' : 'Site'}
                        </span>
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

const Projects = () => {
    return (
        <div className="pt-16 pb-16 px-4 relative overflow-hidden">
            {/* Background Grid Accent */}
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-20 pointer-events-none -z-10" />

            <h1 className="text-center text-3xl md:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Featured <span className="bg-linear-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-center text-cyan-400/60 font-mono text-sm mb-16 uppercase tracking-widest">[ Recent Works ]</p>

            <div className="w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </div>
    )
}

export default Projects
