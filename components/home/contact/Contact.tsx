import React from 'react'
import { BiEnvelope, BiLogoLinkedin, BiMap } from 'react-icons/bi'
import { FaCode, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className='pt-16 pb-16'>
            <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                {/*Text Content*/}
                <div >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
                        Reach Out Anytime
                    </h2>
                    <p className="text-gray-400 mt-6 text-base sm:text-lg">
                        Whether it’s a project idea or a quick question, I’m always happy to chat. Drop a message and I’ll respond promptly!

                    </p>
                    <div className='mt-7'>
                        <div className='flex items-center space-x-3 mb-4'>
                            <BiEnvelope className='w-9 h-9 text-cyan-300' />
                            <p className='text-xl font-bold text-gray-400'>vedc2853@gmail.com</p>
                        </div>
                        <div className='flex items-center space-x-3 mb-4'>
                            <BiMap className='w-9 h-9 text-cyan-300' />
                            <p className='text-xl font-bold text-gray-400'>Mumbai, India</p>
                        </div>
                    </div>

                    {/*Social icons*/}
                    <div className='flex items-center mt-8 space-x-3' >
                        <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300'>
                            <FaLinkedin className='text-white w-6 h-6' />
                        </div>
                        <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-pink-500 transition-all duration-300'>
                            <FaInstagram className='text-white w-6 h-6' />
                        </div>
                        <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-black transition-all duration-300'>
                            <FaGithub className='text-white w-6 h-6' />
                        </div>
                        <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-amber-500 transition-all duration-300'>
                            <FaCode className='text-white w-6 h-6' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact