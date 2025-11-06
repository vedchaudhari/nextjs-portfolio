"use client";
import React from 'react'
import { SiGithub, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostman, SiReact, SiRedis, SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si'
import Tilt from 'react-parallax-tilt'

const skills = [
    {
        name: 'Javascript',
        icon: <SiJavascript />,
        percentage: 89,
    },
    {
        name: 'React.Js',
        icon: <SiReact />,
        percentage: 92,
    },
    {
        name: 'Next.Js',
        icon: <SiNextdotjs />,
        percentage: 88,
    },
    {
        name: 'Node.Js',
        icon: <SiNodedotjs />,
        percentage: 90,
    },
    {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss />,
        percentage: 94,
    },
    {
        name: 'Typescript',
        icon: <SiTypescript />,
        percentage: 86
    },
    {
        name: 'MongoDB',
        icon: <SiMongodb />,
        percentage: 85,
    },
    {
        name: 'Redis',
        icon: <SiRedis />,
        percentage: 80,
    },
    {
        name: 'API Testing',
        icon: <SiPostman />,
        percentage: 87,
    },
    {
        name: 'Git',
        icon: <SiGithub />,
        percentage: 85
    },
    {
        name: 'Deployment',
        icon: <SiVercel />,
        percentage: 80
    }

]

const Skills = () => {
    return (
        <div className='text-white pt-16 pb-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white '>
                My <span className='text-cyan-300'>Skills</span>
            </h1>
            <div className='flex flex-wrap justify-center gap-6 mt-16'>
                {skills.map((skill, i) => {
                    return (
                        <Tilt key={skill.name} scale={1.5} transitionSpeed={400}>
                            <div data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-delay={i} className='bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105'>
                                <div className='text-5xl mb-4 text-gray-300'>{skill.icon}</div>
                                <p className='text-2xl font-semibold'>{skill.percentage}%</p>
                                <p className='text-purple-400 mt-1'>{skill.name}</p>
                            </div>
                        </Tilt>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills