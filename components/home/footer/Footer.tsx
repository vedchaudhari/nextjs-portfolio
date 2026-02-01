import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-linear-to-r from-blue-950/30 to-cyan-900/20 backdrop-blur-md p-8 border-t border-cyan-500/10'>
            <p className='text-base sm:text-lg text-white/60 text-center hover:text-cyan-300 transition-colors duration-300 tracking-wide'>
                Copyright © 2026 <span className='font-bold text-white group-hover:text-cyan-400'>Ved Chaudhari</span>. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer