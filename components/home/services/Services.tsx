import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
    return (
        <div className='pt-20 pb-20 px-4 max-w-[1920px] mx-auto'>
            <h1 className='text-center text-3xl md:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-tight'>
                My <span className='bg-linear-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent'>Expertise</span>
            </h1>
            <div className='w-[95%] sm:w-[90%] xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
                <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                    <ServiceCard
                        icon="/images/s1.png"
                        name="Backend Development"
                        description="Architecting scalable Node.js servers, designing RESTful APIs, and implementing performance optimization with Redis and WebSockets."
                    />
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
                    <ServiceCard
                        icon="/images/s2.png"
                        name="Real-Time Systems"
                        description="Building event-driven architectures using Socket.IO and RabbitMQ for low-latency messaging in multiplayer and chat applications."
                    />
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
                    <ServiceCard
                        icon="/images/s3.png"
                        name="Cloud & Deployment"
                        description="Deploying containerized microservices on AWS EC2, managing Nginx reverse proxies, and automating workflows with CI/CD pipelines."
                    />
                </div>
            </div>
        </div>
    )
}

export default Services