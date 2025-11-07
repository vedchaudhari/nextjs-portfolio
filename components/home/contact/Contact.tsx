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
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('Message sent successfully! I\'ll get back to you soon.');
                setFormData({ name: '', email: '', mobile: '', message: '' });
            } else {
                setSubmitStatus('Failed to send message. Please try again.');
            }
        } catch (error) {
            setSubmitStatus('Network error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='pt-16 pb-16'>
            <div data-aos="fade-up" data-aos-delay="100"
                className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
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
                        <a href="https://www.linkedin.com/in/ved-chaudhari" target="_blank" rel="noopener noreferrer" className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#0077B5] transition-all duration-300'>
                            <FaLinkedin className='text-white w-6 h-6' />
                        </a>

                        {/* Instagram */}
                        <a href="https://www.instagram.com/vedchaudhari__07" target="_blank" rel="noopener noreferrer" className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-linear-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] transition-all duration-300'>
                            <FaInstagram className='text-white w-6 h-6' />
                        </a>

                        {/* GitHub */}
                        <a href="https://github.com/vedchaudhari" target="_blank" rel="noopener noreferrer" className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#181717] transition-all duration-300'>
                            <FaGithub className='text-white w-6 h-6' />
                        </a>

                        {/* LeetCode */}
                        <a
                            href="https://leetcode.com/u/codybuddy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-linear-to-tr from-[#000000] to-[#a0702c] transition-all duration-300'
                        >
                            <img src="/images/leetcode.png" alt="LeetCode" className='w-6 h-6' />
                        </a>

                    </div>

                </div>

                {/*form*/}
                <div className='md:p-10 p-5 bg-[#131332] rounded-lg'>

                    {submitStatus && (
                        <div className={`mb-6 p-4 rounded-md ${submitStatus.includes('successfully')
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
                            className='px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder='Email Address'
                            required
                            className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
                        />
                        <input
                            type="text"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            placeholder='Mobile no.'
                            className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder='Your Message'
                            required
                            className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem] resize-none scroll-m-0'
                        />

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`mt-8 px-12 py-4 transition-all duration-300 text-white rounded-full ${isSubmitting
                                ? 'bg-gray-600 cursor-not-allowed'
                                : 'bg-blue-950 hover:bg-blue-900 cursor-pointer'
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