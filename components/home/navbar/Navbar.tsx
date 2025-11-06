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
        <div className={`transition-all ${navBg ? "bg-[#0f142ed9] shadow-md" : "fixed"} duration-200 h-[12vh] z-10000 fixed w-full`} >
            <div className='flex items-center h-full justify-between w-[90%] mx-auto '>
                {/*LOGO*/}
                <div
                    className='flex items-center space-x-2 cursor-pointer'
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
                        <FaCode className='w-5 h-5 text-black' />
                    </div>
                    <h1 className="text-xl text-white">Ved</h1>
                </div>



                {/*navlinks*/}
                <div className='hidden lg:flex items-center space-x-10'>
                    {
                        NavLinks.map((link) => {
                            return (
                                <Link key={link.id} href={link.url} className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200">
                                    <p>{link.label}</p>
                                </Link>
                            )
                        })
                    }
                </div>
                {/*buttons*/}
                <div className='flex items-center space-x-4'>
                    {/*CV button*/}
                    <button
                        className='px-8 py-3 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2'
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
                        <span>Download CV</span>
                    </button>


                    {/*Burger menu*/}
                    <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />

                </div>
            </div>
        </div>
    )
}

export default Navbar