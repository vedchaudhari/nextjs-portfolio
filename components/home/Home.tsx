import React from 'react';
import Hero from './hero/Hero';
import Services from './services/Services';
import Resume from './resume/Resume';
import Projects from './projects/Projects';

const Home = () => {
    return (
        <div className='overflow-hidden h-2000'>
            <Hero />
            <Services />
            <Resume />
            <Projects/>
        </div>
    )
}

export default Home;