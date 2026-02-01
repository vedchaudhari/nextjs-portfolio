"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Tilt from 'react-parallax-tilt'

type Props = {
    icon: string;
    name: string;
    description: string;
}

const ServiceCard = ({ icon, name, description }: Props) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
            className="h-full"
            tiltEnable={!isMobile}
        >
            <div className='h-full min-h-[300px] flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/5 shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:border-cyan-500/30 transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden'>

                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -z-10 group-hover:bg-cyan-500/20 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -z-10 group-hover:bg-purple-500/20 transition-all duration-500" />

                <div className='relative w-20 h-20 mb-6 group-hover:scale-110 transition-transform duration-500'>
                    <Image
                        src={icon}
                        alt={name}
                        fill
                        className='object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]'
                        sizes="80px"
                    />
                </div>

                <h2 className='text-xl sm:text-2xl font-bold text-white mb-4 text-center group-hover:text-cyan-300 transition-colors duration-300'>
                    {name}
                </h2>

                <p className='text-gray-400 text-sm sm:text-base text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300'>
                    {description}
                </p>
            </div>
        </Tilt>
    )
}

export default ServiceCard