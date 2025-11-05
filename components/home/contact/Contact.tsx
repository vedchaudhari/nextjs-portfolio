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
                    <div className='flex items-center mt-8 space-x-3'>
                        {/* LinkedIn */}
                        <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#0077B5] transition-all duration-300'>
                            <FaLinkedin className='text-white w-6 h-6' />
                        </div>

                        {/* Instagram */}
                        <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-linear-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] transition-all duration-300'>
                            <FaInstagram className='text-white w-6 h-6' />
                        </div>

                        {/* GitHub */}
                        <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#181717] transition-all duration-300'>
                            <FaGithub className='text-white w-6 h-6' />
                        </div>

                        {/* LeetCode */}
                        <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-linear-to-tr from-[#FFA116] to-[#F27C00] transition-all duration-300'>
                            <FaCode className='text-white w-6 h-6' />
                        </div>
                    </div>
                </div>

                {/*form*/}
                <div className='md:p-10 p-5 bg-[#131332] rounded-lg'>
                    <input
                        type="text"
                        placeholder='Name'
                        className='px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
                    />
                    <input
                        type="email"
                        placeholder='Email Address'
                        className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
                    />
                    <input
                        type="text"
                        placeholder='Mobile no.'
                        className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
                    />
                    <textarea
                        placeholder='Your Message'
                        className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem] resize-none scroll-m-0'
                    />

                    <button className='mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full '>Send Message</button>

                </div>
            </div>
        </div>
    )
}

export default Contact