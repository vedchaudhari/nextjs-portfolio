import React from 'react';
import Hero from './hero/Hero';
import Services from './services/Services';
import Resume from './resume/Resume';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Blog from './blog/Blog';
import Contact from './contact/Contact';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <section id='home'><Hero /></section>
            <section id='services'><Services /></section>
            <section id='resume'><Resume /></section>
            <section id='work'><Projects /></section>
            <section id='skills'><Skills /></section>
            <section id='testimonials'><Blog/></section>
            <section id='contact'><Contact/></section>
        </div>
    )
}

export default Home;