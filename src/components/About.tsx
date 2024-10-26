import React from 'react'
import Image from 'next/image'
import about from '../../public/image/about.jpg'

const About = () => {
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 item-center gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16' id='about'>
          <Image src={about} height={500} width={500} alt='about pic'objectFit='cover' data-aos="fade-right"></Image>
          <div className='mt-4 md:mt-0 text-center 'data-aos="fade-left">
            <h2 className='text-4xl mb-4 text-white italic font-bold  underline'>About Me</h2>
            <p className='text-base lg:text-lg'>
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
