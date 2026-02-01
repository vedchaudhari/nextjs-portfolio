import React, { ReactNode } from 'react'
import { IconType } from 'react-icons';

type Props = {
    role: string;
    Icon?: IconType;
    date?: string;
    description: any;
}

const ResumeCard = ({ Icon, role, date, description }: Props) => {
    return (
        <div className='group relative h-full'>
            <div className={`relative flex items-start ${Icon ? "space-x-4 sm:space-x-6" : ""} p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] overflow-hidden h-full`}>

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />

                {Icon && (
                    <div className='relative shrink-0 sm:w-16 sm:h-16 w-12 h-12 bg-linear-to-br from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300'>
                        <Icon className="sm:w-8 sm:h-8 w-6 h-6 text-cyan-300 group-hover:text-cyan-200 transition-colors" />
                    </div>
                )}

                <div className='flex-1 relative z-10'>
                    {date && (
                        <span className='inline-block mb-3 px-3 py-1 rounded-md bg-white/5 text-cyan-200 text-xs sm:text-sm font-medium tracking-wide border border-white/10'>
                            {date}
                        </span>
                    )}
                    <h3 className='text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300'>
                        {role}
                    </h3>
                    <div className='mt-3 text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors'>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeCard