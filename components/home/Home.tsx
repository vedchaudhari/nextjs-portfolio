import React from 'react';
import Hero from './hero/Hero';
import Services from './services/Services';
import Resume from './resume/Resume';

const Home = () => {
    return (
        <div className='overflow-hidden h-2000'>
            <Hero />
            <Services />
            <Resume />
        </div>
    )
}

export default Home;