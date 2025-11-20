import React, { ReactNode } from 'react'
import { IconType } from 'react-icons';

type Props = {
    role: string;
    Icon: IconType;
    date?: string;
    description: any;
}

const ResumeCard = ({ Icon, role, date, description }: Props) => {
    return (
        <div className='mb-6 group'>
            <div className='flex items-start space-x-4 sm:space-x-6 glass-effect hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 p-4 sm:p-8 rounded-xl hover:scale-[1.02]'>
                <div className='sm:w-14 sm:h-14 w-10 h-10 bg-gradient-to-br from-blue-800 to-blue-950 rounded-full flex items-center justify-center flex-col group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                    <Icon className="sm:w-8 sm:h-8 w-6 h-6 text-white" />
                </div>
                <div className='flex-1'>
                    {date && (
                        <h1 className='mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-300 w-fit sm:text-lg text-sm font-bold border border-cyan-500/30'>{date}</h1>
                    )}
                    <h1 className='text-gray-200 text-lg sm:text-xl md:text-2xl font-semibold group-hover:text-cyan-300 transition-colors duration-300'>
                        {role}
                    </h1>
                    <h1 className='text-gray-300 text-sm sm:text-base pt-3 leading-relaxed'>
                        {description}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default ResumeCard