"use client"
import React, { useState } from 'react'
import { BiEnvelope, BiLogoLinkedin, BiMap } from 'react-icons/bi'
import { FaCode, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
            console.log('Submitting to:', `${backendUrl}/api/contact`);

            const response = await fetch(`${backendUrl}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log('Response:', data);

            if (response.ok) {
                setSubmitStatus(data.message || 'Message sent successfully! I\'ll get back to you soon.');
                setFormData({ name: '', email: '', mobile: '', message: '' });
            } else {
                //  Show specific error message from backend
                if (data.errors && data.errors.length > 0) {
                    const errorMessages = data.errors.map((err: any) => err.message).join(', ');
                    setSubmitStatus(`Validation error: ${errorMessages}`);
                } else {
                    setSubmitStatus(data.message || 'Failed to send message. Please try again.');
                }
            }
        } catch (error) {
            console.error('Contact form error:', error);
            setSubmitStatus('Network error. Please make sure the backend server is running.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='pt-20 pb-20 px-4 max-w-[1920px] mx-auto overflow-hidden'>
            <div data-aos="fade-up" data-aos-delay="100"
                className='w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
                {/*Text Content*/}
                <div >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        Let's <span className="bg-linear-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">Connect</span>
                    </h2>
                    <p className="text-gray-400 mt-6 text-base sm:text-lg leading-relaxed">
                        Open to Backend / SDE-1 opportunities and interesting engineering problems. Let’s connect.
                    </p>
                    <div className='mt-7 space-y-4'>
                        <div className='flex items-center space-x-4 group cursor-pointer p-4 rounded-xl hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-cyan-500/20'>
                            <div className="w-12 h-12 bg-cyan-900/20 rounded-full flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-300">
                                <BiEnvelope className='w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300' />
                            </div>
                            <p className='text-lg sm:text-xl font-medium text-gray-300 group-hover:text-cyan-300 transition-colors duration-300'>vedc2853@gmail.com</p>
                        </div>
                        <div className='flex items-center space-x-4 group cursor-pointer p-4 rounded-xl hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-cyan-500/20'>
                            <div className="w-12 h-12 bg-cyan-900/20 rounded-full flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-300">
                                <BiMap className='w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300' />
                            </div>
                            <p className='text-lg sm:text-xl font-medium text-gray-300 group-hover:text-cyan-300 transition-colors duration-300'>Mumbai, India</p>
                        </div>
                    </div>
                    {/*Social icons*/}
                    <div className='flex items-center mt-8 space-x-3 flex-wrap gap-2'>
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/ved-chaudhari" target="_blank" rel="noopener noreferrer" className='w-12 h-12 sm:w-14 sm:h-14 glass-effect rounded-full flex items-center justify-center cursor-pointer hover:bg-[#0077B5] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,119,181,0.5)]'>
                            <FaLinkedin className='text-white w-5 h-5 sm:w-6 sm:h-6' />
                        </a>

                        {/* Instagram */}
                        <a href="https://www.instagram.com/vedchaudhari__07" target="_blank" rel="noopener noreferrer" className='w-12 h-12 sm:w-14 sm:h-14 glass-effect rounded-full flex items-center justify-center cursor-pointer hover:bg-linear-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(221,42,123,0.5)]'>
                            <FaInstagram className='text-white w-5 h-5 sm:w-6 sm:h-6' />
                        </a>

                        {/* GitHub */}
                        <a href="https://github.com/vedchaudhari" target="_blank" rel="noopener noreferrer" className='w-12 h-12 sm:w-14 sm:h-14 glass-effect rounded-full flex items-center justify-center cursor-pointer hover:bg-[#181717] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(24,23,23,0.5)]'>
                            <FaGithub className='text-white w-5 h-5 sm:w-6 sm:h-6' />
                        </a>

                        {/* LeetCode */}
                        <a
                            href="https://leetcode.com/u/codybuddy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='w-12 h-12 sm:w-14 sm:h-14 glass-effect rounded-full flex items-center justify-center cursor-pointer hover:bg-[#FFA116] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,161,22,0.5)]'
                        >
                            <img src="/images/leetcode.png" alt="LeetCode" className='w-5 h-5 sm:w-6 sm:h-6' />
                        </a>

                    </div>

                </div>

                {/*form*/}
                <div className='bg-white/5 backdrop-blur-md p-6 sm:p-10 rounded-3xl border border-white/5 shadow-2xl hover:shadow-[0_0_50px_rgba(6,182,212,0.15)] transition-all duration-500 relative overflow-hidden'>
                    {/* Glow effect */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                    {submitStatus && (
                        <div className={`mb-6 p-4 rounded-lg animate-in fade-in duration-300 ${submitStatus.includes('successfully') || submitStatus.includes('sent')
                            ? 'bg-green-900/20 border border-green-500 text-green-400'
                            : 'bg-red-900/20 border border-red-500 text-red-400'
                            }`}>
                            {submitStatus}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder='Name'
                            required
                            minLength={2}
                            maxLength={100}
                            className='px-4 py-4 bg-black/20 text-white outline-none rounded-xl w-full placeholder:text-gray-500 border border-white/5 focus:border-cyan-500/50 focus:bg-cyan-950/10 transition-all duration-300'
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder='Email Address (Optional)'
                            maxLength={100}
                            className='px-4 py-4 mt-6 bg-black/20 text-white outline-none rounded-xl w-full placeholder:text-gray-500 border border-white/5 focus:border-cyan-500/50 focus:bg-cyan-950/10 transition-all duration-300'
                        />
                        <input
                            type="text"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            placeholder='Mobile no. (Optional)'
                            maxLength={20}
                            className='px-4 py-4 mt-6 bg-black/20 text-white outline-none rounded-xl w-full placeholder:text-gray-500 border border-white/5 focus:border-cyan-500/50 focus:bg-cyan-950/10 transition-all duration-300'
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder='How can I help you?'
                            required
                            minLength={10}
                            maxLength={2000}
                            className='px-4 py-4 mt-6 bg-black/20 text-white outline-none rounded-xl w-full placeholder:text-gray-500 h-40 resize-none border border-white/5 focus:border-cyan-500/50 focus:bg-cyan-950/10 transition-all duration-300'
                        />

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`mt-8 px-12 py-4 transition-all duration-300 text-white rounded-xl font-bold tracking-wide w-full sm:w-auto ${isSubmitting
                                ? 'bg-gray-600 cursor-not-allowed'
                                : 'bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg hover:shadow-cyan-500/30'
                                }`}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contact