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
                    <div className='mt-10' data-aos="zoom-in" data-aos-anchor-placement="top-center">
                        <ResumeCard
                            Icon={SiNodedotjs}
                            role="Node.js Developer - Wharf Street Strategies"
                            description={
                                <ul className='list-disc pl-6 space-y-1'>
                                    <li>Built and optimized backend systems for real-time applications like food delivery, ride, and LMS platforms.</li>
                                    <li>Developed RESTful APIs and improved performance through caching and load optimization.</li>
                                    <li>Integrated payment gateways and handled secure transaction workflows.</li>
                                </ul>
                            }
                        />
                        <ResumeCard
                            Icon={SiNodedotjs}
                            role="Node.js Intern - Wharf Street Studios"
                            description={
                                <ul className='list-disc pl-6 space-y-1'>
                                    <li>Worked on real-time in-game communication features using Node.js and Socket.IO, enabling live clan announcements.</li>
                                    <li>Integrated MongoDB for efficient chat data handling and message persistence.</li>
                                    <li>Collaborated with game developers to ensure seamless client-server synchronization.</li>
                                </ul>
                            }
                        />
                        <ResumeCard
                            Icon={FaLaptopCode}
                            role="Web Dev Intern - TryIO"
                            description={
                                <ul className='list-disc pl-6 space-y-1'>
                                    <li>Developed and deployed the company’s official website with modern UI/UX practices.</li>
                                    <li>Focused on responsive design to ensure compatibility across all devices.</li>
                                    <li>Optimized site performance for faster load times and smoother user experience.</li>
                                </ul>
                            }
                        />
                    </div>
                </div>

                {/*Education*/}
                <div>
                    <h1 className='text-3xl sm:text-4xl font-bold text-white' >
                        My <span className='text-cyan-200'>Education</span>
                    </h1>
                    <div className='mt-10' data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="300">
                        {/*role -> college to be updated*/}
                        <ResumeCard
                            Icon={FaGraduationCap}
                            date='Aug 2020 - May 2024'
                            role="Bachelor of Computer Engineering – Rajiv Gandhi Institute of Technology, Mumbai"
                            description={
                                <ul className='list-disc pl-6 space-y-1'>
                                    <li>Graduated with a Bachelor’s degree in Computer Engineering.</li>
                                    <li>Built a strong foundation in software development and databases.</li>
                                    <li>Gained hands-on experience in modern web technologies through project-based learning.</li>
                                </ul>
                            }
                        />

                        <ResumeCard
                            Icon={FaSchool}
                            date='June 2019 – June 2020'
                            role="Intermediate Education – Narayana Junior College, Telangana"
                            description={
                                <ul className='list-disc pl-6 space-y-1'>
                                    <li>Completed intermediate education with a focus on core science subjects.</li>
                                    <li>Specialized in Mathematics, Physics, and Chemistry.</li>
                                    <li>Developed strong analytical skills.</li>
                                </ul>
                            }
                        />
                        <ResumeCard
                            Icon={FaSchool}
                            date='June 2017 – March 2018'
                            role="Secondary School Certificate (SSC) – Tapti Public School"
                            description={
                                <ul className='list-disc pl-6 space-y-1'>
                                    <li>Completed SSC with a strong foundation in Mathematics, Science, and analytical skills.</li>
                                </ul>
                            }
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Resume