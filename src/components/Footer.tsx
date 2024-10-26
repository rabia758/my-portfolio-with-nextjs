import React from 'react';
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex  font-medium  items-center md:justify-start justify-center text-white">
      <span className="ml-3 text-2xl">Rabia Rizwan</span>
    </a>
    <p className="text-sm text-purple-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2023 Rabia Rizwan —
      <a
        href="http://localhost:3000/"
        className="text-white ml-1"

        rel="noopener noreferrer"
        target="_blank"
      >
        @Portfolio
      </a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link  className= " ml-3 text-purple-500  transition ease-in-out delay-200 hover:translate-y-1 hover:scale-110 duration-300 rounded-full"
      href='https://www.facebook.com/rabia.rizwan123'>
        
          <FaFacebook  className='h-8 w-8'/>     
      </Link>

      <Link className="ml-3 text-purple-500  transition ease-in-out delay-200 hover:translate-y-1 hover:scale-110 duration-300 rounded-full"
      href='https://www.linkedin.com/in/rabia-rizwan-5bb82a301/'>
          <FaLinkedin className='h-8 w-8'/>
      </Link>
      
      <Link className="ml-3 text-purple-500  transition ease-in-out delay-200 hover:translate-y-1 hover:scale-110 duration-300 rounded-full"
      href='https://github.com/rabia758'>
        <FaGithub className='h-8 w-8 '/>
      </Link>
      
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
