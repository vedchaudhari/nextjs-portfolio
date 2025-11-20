import Image from 'next/image';
import React from 'react'

type Props = {
    icon: string;
    name: string;
    description: string;
}

const ServiceCard = ({ icon, name, description }: Props) => {
    return (
        <div className='glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] group cursor-pointer'>
            <div className='group-hover:scale-110 group-hover:rotate-6 transition-all duration-300'>
                <Image src={icon} alt="img" width={60} height={60} />
            </div>
            <h1 className='mt-6 text-xl md:text-2xl font-bold text-gray-200 group-hover:text-cyan-300 transition-colors duration-300'>{name}</h1>
            <p className='mt-6 text-gray-300 leading-relaxed'>{description}</p>
        </div>
    )
}

export default ServiceCard