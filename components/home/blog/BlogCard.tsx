import Image from 'next/image';
import React from 'react'

type Props = {
    image: string;
    title: string;
}

const BlogCard = ({ image, title }: Props) => {
    return (
        <div className='glass-effect p-4 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] group cursor-pointer'>
            <div className='overflow-hidden rounded-lg'>
                <Image
                    src={image}
                    alt='blog'
                    width={500}
                    height={500}
                    className='object-cover rounded-lg group-hover:scale-110 transition-transform duration-500'
                />
            </div>
            <p className='mt-4 text-gray-400 font-medium text-sm sm:text-base'>5 July 2025</p>
            <h1 className='mt-3 text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-cyan-300 cursor-pointer transition-all duration-300 line-clamp-2'>{title}</h1>
            <div className='mt-4 flex gap-2 items-center flex-wrap'>
                <p className='px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-blue-800 to-blue-950 text-white text-xs sm:text-sm font-bold rounded-full hover:from-cyan-600 hover:to-blue-800 transition-all duration-300'>React</p>
                <p className='px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-blue-800 to-blue-950 text-white text-xs sm:text-sm font-bold rounded-full hover:from-cyan-600 hover:to-blue-800 transition-all duration-300'>Next JS</p>
                <p className='px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-blue-800 to-blue-950 text-white text-xs sm:text-sm font-bold rounded-full hover:from-cyan-600 hover:to-blue-800 transition-all duration-300'>Tailwind</p>
            </div>
        </div>
    )
}

export default BlogCard