"use client";
import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiDownload } from 'react-icons/bi'
import { FaCode } from 'react-icons/fa'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
    openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {
    const [navBg, setnavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setnavBg(true);
            if (window.scrollY < 90) setnavBg(false);
        };
        window.addEventListener("scroll", handler);

        return () => window.removeEventListener("scroll", handler)
    }, [])


    return (
        <nav className={`transition-all ${navBg ? "bg-[#0f142ed9] shadow-lg backdrop-blur-md border-b border-white/5" : "fixed"} duration-300 h-[10vh] sm:h-[12vh] z-[1000] fixed w-full`} >
            <div className='flex items-center h-full justify-between w-[90%] mx-auto '>
                {/*LOGO*/}
                <div
                    className='flex items-center space-x-2 cursor-pointer group'
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <div className='w-10 h-10 bg-linear-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center flex-col shadow-lg group-hover:rotate-12 transition-transform duration-300'>
                        <FaCode className='w-5 h-5 text-white' />
                    </div>
                    <div className="text-xl sm:text-2xl text-white font-extrabold tracking-tight">Ved</div>
                </div>



                {/*navlinks*/}
                <div className='hidden lg:flex items-center space-x-10'>
                    {
                        NavLinks.map((link) => {
                            return (
                                <Link key={link.id} href={link.url} className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-300 hover:scale-110 relative group">
                                    <p>{link.label}</p>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-300 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            )
                        })
                    }
                </div>
                {/*buttons*/}
                <div className='flex items-center space-x-4'>
                    {/*CV button*/}
                    <button
                        className='px-6 py-2.5 sm:px-8 sm:py-3 text-sm cursor-pointer rounded-full bg-linear-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 text-white flex items-center space-x-2 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] border border-blue-500/30'
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = '/pdfs/Ved_Chaudhari_Resume.pdf';
                            link.download = 'Ved_Chaudhari_Resume.pdf';
                            link.target = '_blank'; // fallback for mobile
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}

                    >
                        <BiDownload className='w-5 h-5' />
                        <span className="font-semibold tracking-wide">Download CV</span>
                    </button>


                    {/*Burger menu*/}
                    <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />

                </div>
            </div>
        </nav>
    )
}

export default Navbar