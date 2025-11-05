import React from 'react'
import { BsDatabase } from 'react-icons/bs'
import { FaGraduationCap, FaLaptop, FaLaptopCode, FaReact, FaSchool } from 'react-icons/fa';
import { LuLaptop } from "react-icons/lu"; // Lucide (thin outline style)
import { SiNodedotjs } from "react-icons/si";
import ResumeCard from './ResumeCard'

const Resume = () => {
    return (
        <div className='pt-20 pb-16'>
            <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
                {/*Work*/}
                <div>
                    <h1 className='text-3xl sm:text-4xl font-bold text-white' >
                        My Work <span className='text-cyan-200'>Experience</span>
                    </h1>
                    <div className='mt-10'>
                        <ResumeCard
                            Icon={SiNodedotjs}
                            role="Node.js Developer - Wharf Street Strategies"
                            description='Working on building and optimizing backend systems for real-time applications, including food delivery, ride, and LMS platforms. Focused on API development, performance optimization, and payment integrations.'
                        />
                        <ResumeCard
                            Icon={SiNodedotjs}
                            role="Node.js Intern - Wharf Street Studios"
                            description='Worked on real-time in-game communication features using Node.js and Socket.IO, enabling live clan announcements. Integrated MongoDB for efficient chat data handling and collaborated with game developers for seamless client-server sync.'
                        />
                        <ResumeCard
                            Icon={FaLaptopCode}
                            role="Web Dev Intern - TryIO"
                            description='Developed and deployed the company’s official website, focusing on responsive design, performance, and modern UI/UX implementation.'
                        />
                    </div>
                </div>

                {/*Education*/}
                <div>
                    <h1 className='text-3xl sm:text-4xl font-bold text-white' >
                        My <span className='text-cyan-200'>Education</span>
                    </h1>
                    <div className='mt-10'>
                        {/*role -> college to be updated*/}
                        <ResumeCard
                            Icon={FaGraduationCap}
                            date='Aug 2020 - May 2024'
                            role="Bachelor of Computer Engineering – MCT’s Rajiv Gandhi Institute of Technology, Mumbai"
                            description="Graduated with a Bachelor’s degree in Computer Engineering, building a strong foundation in software development, databases, and modern web technologies through practical, project-based learning."
                        />

                        <ResumeCard
                            Icon={FaSchool}
                            date='June 2019 – June 2020'
                            role="Intermediate Education – Narayana Junior College, Telangana"
                            description="Completed intermediate education with a focus on Mathematics, Physics, and Chemistry."
                        />
                        <ResumeCard
                            Icon={FaSchool}
                            date='June 2017 – March 2018'
                            role="Secondary School Certificate (SSC) – Tapti Public School"
                            description="Completed SSC with a strong academic foundation, focusing on mathematics, science, and analytical skills."
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Resume