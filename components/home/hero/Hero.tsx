"use client"

import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { TypewriterClass } from 'typewriter-effect'
import Typewriter from 'typewriter-effect'
import ParticlesHero from './ParticleBackground'

const Hero = () => {
    return (
        <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col lg:pt-20 select-none">
            <div className="pointer-events-none absolute inset-0">
                <ParticlesHero />
            </div>

            <div className='relative flex flex-col items-center'>
                <Image
                    src="/images/s12.png"
                    alt="heroimage" width={150}
                    height={150}
                    className='rounded-full border-8 border-[#0c0c48aa]'
                    data-aos="fade-up"
                />
            </div>
            <h1 data-aos="fade-up" data-aos-delay="200" className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide'>
                Creating web products,<br />
                brands <span className='text-cyan-200'>and experiences.</span>
            </h1>
            <h2 data-aos="fade-up" data-aos-delay="400" className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center'>
                Hi! I&apos;m Ved - A Passionate
                <span className='text-cyan-200 font-bold'>
                    <Typewriter options={{
                        strings: [
                            ' Frontend Developer',
                            ' Backend Developer',
                            ' Web Developer'
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 75,
                        deleteSpeed: 50,
                        wrapperClassName: 'pl-2',
                    }} />
                </span>
            </h2>
            <button
                onClick={() => {
                    const section = document.getElementById("work");
                    if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                    }
                }}
                data-aos="fade-up"
                data-aos-delay="600"
                className='mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 rounded-full text-lg font-medium flex items-center justify-center gap-2 cursor-pointer'
            >
                <span>See my work</span>
                <BsArrowRight className='w-5 h-5' />
            </button>

        </div>
    )
}

export default Hero