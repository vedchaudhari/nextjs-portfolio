import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
    const blogs = [
        {
            id: 9,
            title: "Building Reliable CI/CD Pipelines for Microservices with Node.js",
            date: "17 Jan 2025",
            image: "/images/nodeblog.jpg",
            tags: ["Node.js", "Docker", "AWS"]
        },
        {
            id: 8,
            title: "Architecting Readsphere: A Scalable Real-Time Social Platform using AWS, Docker, and Nginx",
            date: "17 Jan 2025",
            image: "/images/readsphere0.png",
            tags: ["react native", "typescript", "aws"]
        },
        {
            id: 7,
            title: "Micro-Blog Platform: A Cloud-Native Microservices Architecture",
            date: "16 Jan 2025",
            image: "/images/microblog0.jpg",
            tags: ["aws", "microservices", "typescript"]
        }
    ];

    return (
        <div className='pt-16 pb-16 px-4'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white '>
                My latest <span className='text-cyan-300'>Blogs</span>
            </h1>
            <div className='w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 items-center mt-16'>
                {blogs.map((blog, index) => (
                    <div key={blog.id} data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay={index * 100}>
                        <BlogCard
                            image={blog.image}
                            title={blog.title}
                            date={blog.date}
                            tags={blog.tags}
                            id={blog.id}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog