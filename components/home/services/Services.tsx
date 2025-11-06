import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
    return (
        <div className='pt-16 pb-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white '>
                My <span className='text-cyan-300'>Expertise</span>
            </h1>
            <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20 items-center'>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                    <ServiceCard
                        icon="/images/s1.png"
                        name="Web and Mobile App"
                        description="Designing and developing responsive, high-performance websites and mobile applications focused on seamless user experiences."
                    />
                </div>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
                    <ServiceCard
                        icon="/images/s2.png"
                        name="Backend Development"
                        description="Building secure, scalable, and high-performing backend systems that ensure smooth data flow and robust application logic."
                    />
                </div>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
                    <ServiceCard
                        icon="/images/s3.png"
                        name="API Integration"
                        description="Creating and integrating reliable APIs that connect different systems and enhance the functionality and performance of applications."
                    />
                </div>
                {/* <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
                    <ServiceCard
                        icon="/images/s4.png"
                        name="UI/UX Design"
                        description="Crafting intuitive and visually appealing interfaces that provide meaningful and engaging experiences for users."
                    />
                </div> */}
            </div>
        </div>
    )
}

export default Services