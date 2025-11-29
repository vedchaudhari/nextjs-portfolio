import Image from 'next/image';
import React from 'react'
import Tilt from 'react-parallax-tilt'

type Props = {
    icon: string;
    name: string;
    description: string;
}

const ServiceCard = ({ icon, name, description }: Props) => {
    return (
        <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
            className="h-full"
        >
            <div className='glass-effect p-8 rounded-2xl h-full hover:shadow-[0_20px_50px_rgba(6,182,212,0.3)] transition-all duration-300 group cursor-pointer border border-white/5 hover:border-cyan-400/30 relative overflow-hidden' style={{ transformStyle: 'preserve-3d' }}>
                {/* 3D Depth Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className='group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10' style={{ transform: 'translateZ(30px)' }}>
                    <Image src={icon} alt="img" width={60} height={60} className="drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                </div>

                <div style={{ transform: 'translateZ(20px)' }}>
                    <h1 className='mt-6 text-xl md:text-2xl font-bold text-gray-200 group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-md'>{name}</h1>
                    <p className='mt-4 text-gray-300 leading-relaxed group-hover:text-white/90 transition-colors'>{description}</p>
                </div>
            </div>
        </Tilt>
    )
}

export default ServiceCard