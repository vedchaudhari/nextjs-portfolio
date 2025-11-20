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
                // Show specific error message from backend
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
        <div className='pt-16 pb-16 px-4'>
            <div data-aos="fade-up" data-aos-delay="100"
                className='w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
                {/*Text Content*/}
                <div >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
                        Reach Out Anytime
                    </h2>
                    <p className="text-gray-400 mt-6 text-base sm:text-lg leading-relaxed">
                        Whether it's a project idea or a quick question, I'm always happy to chat. Drop a message and I'll respond promptly!

                    </p>
                    <div className='mt-7 space-y-4'>
                        <div className='flex items-center space-x-3 group cursor-pointer'>
                            <BiEnvelope className='w-8 h-8 sm:w-9 sm:h-9 text-cyan-300 group-hover:scale-110 transition-transform duration-300' />
                            <p className='text-lg sm:text-xl font-bold text-gray-400 group-hover:text-cyan-300 transition-colors duration-300'>vedc2853@gmail.com</p>
                        </div>
                        <div className='flex items-center space-x-3 group cursor-pointer'>
                            <BiMap className='w-8 h-8 sm:w-9 sm:h-9 text-cyan-300 group-hover:scale-110 transition-transform duration-300' />
                            <p className='text-lg sm:text-xl font-bold text-gray-400 group-hover:text-cyan-300 transition-colors duration-300'>Mumbai, India</p>
                        </div>
                    </div>
                    {/*Social icons*/}
                    <div className='flex items-center mt-8 space-x-3 flex-wrap gap-2'>
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/ved-chaudhari" target="_blank" rel="noopener noreferrer" className='w-12 h-12 sm:w-14 sm:h-14 glass-effect rounded-full flex items-center justify-center cursor-pointer hover:bg-[#0077B5] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,119,181,0.5)]'>
                            <FaLinkedin className='text-white w-5 h-5 sm:w-6 sm:h-6' />
                        </a>

                        {/* Instagram */}
                        <a href="https://www.instagram.com/vedchaudhari__07" target="_blank" rel="noopener noreferrer" className='w-12 h-12 sm:w-14 sm:h-14 glass-effect rounded-full flex items-center justify-center cursor-pointer hover:bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(221,42,123,0.5)]'>
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
                <div className='glass-effect md:p-10 p-6 rounded-2xl shadow-2xl'>

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
                            className='px-4 py-3.5 bg-[#363659] text-white outline-none rounded-lg w-full placeholder:text-white/70 focus:ring-2 focus:ring-cyan-500 transition-all duration-300'
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder='Email Address (Optional)'
                            maxLength={100}
                            className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-lg w-full placeholder:text-white/70 focus:ring-2 focus:ring-cyan-500 transition-all duration-300'
                        />
                        <input
                            type="text"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            placeholder='Mobile no. (Optional)'
                            maxLength={20}
                            className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-lg w-full placeholder:text-white/70 focus:ring-2 focus:ring-cyan-500 transition-all duration-300'
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder='Your Message'
                            required
                            minLength={10}
                            maxLength={2000}
                            className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-lg w-full placeholder:text-white/70 h-[10rem] resize-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300'
                        />

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`mt-8 px-12 py-4 transition-all duration-300 text-white rounded-full font-semibold ${isSubmitting
                                ? 'bg-gray-600 cursor-not-allowed'
                                : 'bg-blue-800 hover:bg-blue-900 cursor-pointer hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]'
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