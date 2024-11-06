import React from 'react'
import Image from 'next/image'
import about from '../../public/image/about.jpg'
import 'animate.css';


const About = () => {
  return (
    <section className='text-white' id="about">
      <div className='md:grid md:grid-cols-2 item-center gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 animate__animated animate__fadeInRight' id='about'>
        <div className='relative w-full h-full'>
          <Image 
          src={about}
           height={500}
            width={500} 
            alt='about pic'
             className='object-cover rounded-lg group-hover:scale-105 transform transition-all duration-300' >

          </Image>
        </div>
        <div className='mt-4 md:mt-0 text-center md:text-left'>
          <h2 className='text-4xl mb-4 text-white italic font-bold  underline animate__animated animate__fadeInLeft animated-duration-5s animated-delay-9s ease-in out'>About Me</h2>
          <p className='text-base lg:text-lg animate__animated animate__fadeInRight '>
            I’m Rabia, a frontend developer with expertise in HTML, CSS, TypeScript, React,
            and Node.js.
            I specialize in creating engaging and responsive user interfaces that
            enhance the overall user experience.
            With a strong foundation in modern web technologies,
            I enjoy building efficient and dynamic applications that meet user needs
            and industry standards.
          </p>
        </div>
      </div>
    </section>

  )
}

export default About
