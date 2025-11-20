import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
    return (
        <div className='pt-16 pb-16 px-4'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white '>
                My latest <span className='text-cyan-300'>Blogs</span>
            </h1>
            <div className='w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 items-center mt-16'>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="0">
                    <BlogCard
                        image="/images/b1.jpg"
                        title="Building Modern Web Applications with Next.js and TypeScript"
                    />
                </div>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
                    <BlogCard
                        image="/images/b2.jpg"
                        title="Mastering Backend Development with Node.js and Express"
                    />
                </div>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
                    <BlogCard
                        image="/images/b3.jpg"
                        title="Creating Stunning UI with Tailwind CSS and Framer Motion"
                    />
                </div>
            </div>
        </div>
    )
}

export default Blog