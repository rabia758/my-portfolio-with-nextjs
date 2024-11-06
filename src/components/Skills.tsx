import React from 'react';
import 'animate.css';

const Skills = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto" id='skills'>
    <div className="text-center mb-10">
      <h1 className="sm:text-3xl text-2xl  underline font-medium hover:text-purple-600 text-center title-font text-white mb-4">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap  lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 animate__animated animate__fadeInRight ">
      <div className="p-4 sm:w-1/3  lg:w-1/3 w-full  flex justify-center animate__animated animate__fadeInRight " >
        <div className="bg-purple-300 rounded hover:bg-purple-500 flex p-6 h-full w-full items-center">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            className="text-purple-500 w-8 h-8 flex-shrink-0 mr-3"
            viewBox="0 0 24 24"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </svg>
          <span className="title-font font-medium text-lg sm:text-xl">
            HTML,CSS
          </span>
        </div>
      </div>
      <div className="p-4 sm:w-1/2 lg;w-1/3 w-full flex justify-center">
        <div className="bg-purple-300 rounded hover:bg-purple-500 flex p-6 h-full w-full items-center">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            className="text-purple-500 w-8 h-8 flex-shrink-0 mr-4"
            viewBox="0 0 24 24"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </svg>
          <span className="title-font font-medium text-lg sm;text-xl">
           Typescript, <br />Javascript
          </span>
        </div>
      </div>
      <div className="p-4 sm:w-1/2 lg;w-1/3 flex justify-center w-full">
        <div className="bg-purple-300 rounded hover:bg-purple-500 flex p-6 h-full w-full items-center">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            className="text-pink-800 w-8 h-8 flex-shrink-0 mr-4"
            viewBox="0 0 24 24"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </svg>
          <span className="title-font font-medium text-lg sm:text-xl" >Nodejs</span>
        </div>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/3 flex justify-center w-full">
        <div className="bg-purple-300 rounded hover:bg-purple-500 flex p-6 h-full w-full items-center">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            className="text-pink-800 w-8 h-8 flex-shrink-0 mr-4"
            viewBox="0 0 24 24"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </svg>
          <span className="title-font font-medium text-lg sm:text-xl">
            React
          </span>
        </div>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/3 flex justify-center w-full">
        <div className="bg-purple-300 rounded hover:bg-purple-500 flex p-6 w-full h-full items-center">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            className="text-purple-500 w-8 h-8 flex-shrink-0 mr-4"
            viewBox="0 0 24 24"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </svg>
          <span className="title-font font-medium text-lg sm:text-xl">Python</span>
        </div>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/3 flex justify-center w-full">
        <div className="bg-purple-300 rounded hover:bg-purple-500 flex p-6 w-full h-full items-center">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            className="text-purple-500 w-8 h-8 flex-shrink-0 mr-4"
            viewBox="0 0 24 24"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </svg>
          <span className="title-font font-medium text-lg sm:text-xl">TailwindCSS</span>
        </div>
      </div>
    </div>
    </div>
</section>

    </div>
  )
}

export default Skills
