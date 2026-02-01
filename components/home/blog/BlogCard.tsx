import Image from 'next/image';
import React from 'react'

type Props = {
    image: string;
    title: string;
    date: string;
    tags: string[];
    id: number;
}

const BlogCard = ({ image, title, date, tags, id }: Props) => {
    return (
        <a href={`https://blogmicro.vercel.app/blog/${id}`} target="_blank" rel="noopener noreferrer" className='block'>
            <div className='bg-white/3 backdrop-blur-xl p-4 rounded-xl border border-white/10 hover:border-cyan-400/40 hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] group cursor-pointer relative overflow-hidden'>

                {/* HUD Decorators */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-cyan-500/20 rounded-tl-xl pointer-events-none group-hover:border-cyan-500/50 transition-colors" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-purple-500/20 rounded-br-xl pointer-events-none group-hover:border-purple-500/50 transition-colors" />

                <div className='overflow-hidden rounded-lg h-52 relative w-full border border-white/5 shadow-inner bg-black/20'>
                    <Image
                        src={image}
                        alt='blog'
                        fill
                        className='object-cover rounded-lg group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100'
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-[#0f142e]/80 border border-cyan-500/30 rounded text-[9px] font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        READ_LOG
                    </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <p className='text-cyan-500/50 font-mono text-[10px] tracking-widest'>{date}</p>
                    <div className="h-px grow mx-4 bg-linear-to-r from-cyan-500/20 to-transparent" />
                </div>

                <h1 className='mt-3 text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 cursor-pointer transition-all duration-300 line-clamp-2 leading-tight'>{title}</h1>

                <div className='mt-4 flex gap-1.5 items-center flex-wrap'>
                    {tags.map((tag, i) => (
                        <span key={i} className='px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[9px] font-bold uppercase tracking-tight rounded-sm group-hover:bg-cyan-500/20 transition-all'>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    )
}

export default BlogCard