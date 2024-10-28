import React from 'react';

const Project = () => {
  return (
    <>
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-20 mx-auto">
      <div className="flex item-center justify-center "data-aos="zoom-in">
          <h1 className='text-3xl font-bold text-white underline hover:text-purple-600 items-center justify-center'>My Projects</h1>
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10  -mt-4 ease-in-out duration-300" data-aos="zoom-in">
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 ease-in-out duration-300 hover:bg-gray-800 cursor-pointer">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="project 1"
              className="object-cover object-center h-full w-full"
              src={"image/1.png"}
              >
            </img>
          </div>
          <h2 className="text-xl font-medium title-font text-white mt-5">
            Countdown Timer
          </h2>
          <p className="text-base text-[#ADB7BE] leading-relaxed mt-2">
            Countdown Timer Build with NextJs and Tailwind CSS...
          </p>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 hover:bg-gray-800 cursor-pointer">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="project 2"
              className="object-cover object-center h-full w-full"
              src="image/2.png"
            />
          </div>
          <h2 className="text-xl font-medium title-font text-white mt-5">
            Weather Widger
          </h2>
          <p className="text-base text-[#ADB7BE] leading-relaxed mt-2">
            Weather Widget build witth NextJs and Tailwind CSS...
          </p>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 hover:bg-gray-800 cursor-pointer">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="project 3"
              className="object-cover object-center h-full w-full"
              src="image/3.png"
            />
          </div>
          <h2 className="text-xl font-medium title-font text-white mt-5">
            My Portfolio
          </h2>
          <p className="text-base text-[#ADB7BE] leading-relaxed mt-2">
            My Portfolio Build with HTML, And CSS...
          </p>
        
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 hover:bg-gray-800 cursor-pointer">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="project 4"
              className="object-cover object-center h-full w-full"
              src={"image/4.png"}
              >
            </img>
          </div>
          <h2 className="text-xl font-medium title-font text-white mt-5">
            Currency Conveter
          </h2>
          <p className="text-base text-[#ADB7BE] leading-relaxed mt-2">
            Currency Converter build With HTML, CSS and Typescript ...
          </p>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 hover:bg-gray-800 cursor-pointer">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="project 5"
              className="object-cover object-center h-full w-full"
              src={"image/5.png"}
              >
            </img>
          </div>
          <h2 className="text-xl font-medium title-font text-white mt-5">
            Resume Builder
          </h2>
          <p className="text-base text-[#ADB7BE] leading-relaxed mt-2">
            Resume Builder build With HTML,CSS And Typescript...
          </p>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 hover:bg-gray-800 cursor-pointer">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="project 6"
              className="object-cover object-center h-full w-full"
              src={"image/6.png"}
              >
            </img>
          </div>
          <h2 className="text-xl font-medium title-font text-white mt-5">
            Blogging Website
          </h2>
          <p className="text-base text-[#ADB7BE] leading-relaxed mt-2">
            Blogging Website Build with NextJs and Tailwind CSS...
          </p>
        </div>
      </div>

  </section>
</>


  )
}

export default Project
