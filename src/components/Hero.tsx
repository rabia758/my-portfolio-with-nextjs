"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import profile from "../../public/image/profile.jpg"
import Typewriter from 'typewriter-effect';


const Hero = () => {
  return (
    <section>
      <title>My Portfolio</title>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:px-8 '>
        <div className='col-span-1 sm:col-span-1 place-self-center text-center sm:text-left'>
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold p-5">
            <span className='text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-800'>Hello,I am {" "}</span>
            <Typewriter
              options={{
                strings: [
                  'Rabia Rizwan',
                  'House Wife',
                  'Web Developer',
                  'UI/UX Designer',

                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className='text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl px-4 sm:px-0'>
            I am a passionate front-end developer with expertise in React,
            Next.js, JavaScript, and TypeScript, building modern, responsive,
            and dynamic web applications. With a strong foundation in HTML and CSS, I specialize in creating clean, efficient, and user-friendly interfaces, utilizing Tailwind CSS and Bootstrap.
          </p>
          <div className='flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0'>
            <button
              aria-label='Hire Me'
              className='px-6 py-3 rounded-full w-full sm:w-auto mr-3 bg-white hover:bg-stone-500 text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'>
              Hire Me
            </button>
            <Link href={"/assets/mycv.pdf"}>
              <button
                aria-label='Download CV'
                className='px-6 py-3 rounded-full w-full sm:w-auto  bg-transparent hover:bg-stone-500 text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 '>
                <span className='bg-[#121212] block hover:bg-purple-800 rounded-full px-5 py-2'>
                  Downnload CV
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className='col-span-1 sm:col-span-1 place-self-center mt-4  sm:mt-0 flex justify-center sm:justify-start'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] sm:w-[300px] sm:h-[300px] relative mt-5 '>
            <Image src={profile} alt='profile-pic' height={300} width={300} className='absolute transform rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'></Image>
          </div>
        </div>

      </div>
    </section>

  )
}

export default Hero
