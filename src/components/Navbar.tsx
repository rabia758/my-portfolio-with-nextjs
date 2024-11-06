import Link from 'next/link';
import React ,{useState} from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
        <div className='flex flex-wrap item-center justify-between mx-auto px-4 py-2'>
          <Link href={"/"} className='text-white text-2xl md:text-5xl italic font-semibold underline'>
          Rabia Rizwan
          </Link>
          <div className='block md:hidden '>
          <button
            className='text-white text-3xl focus:outline-none'
            onClick={() => setIsOpen(!isOpen)} // Toggle the menu state
          >
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
        {/*Navigation Links*/}
        <div className={`md:flex md:flex-row ${isOpen ? 'block' : 'hidden'} w-full md:w-auto transition-all duration-300`}>

            <ul className='flex flex-col md-space-x-6 gap-4 md:flex-row  '>
              <Link href={"/"}>
              <li className='text-xl sm:text-xl hover:text-white text-[#ADB7BE]'>Home</li>
              </Link>
              <Link href={"#about"}>
              <li className='text-xl sm:text-xl hover:text-white text-[#ADB7BE]'>About</li>
              </Link>
              <Link href={"#contact"}>
              <li className='text-xl sm:text-xl hover:text-white text-[#ADB7BE]'>Contact</li>
              </Link>
              <Link href={"#Projects"}>
              <li className='text-xl sm:text-xl hover:text-white text-[#ADB7BE]'>Projects</li>
              </Link>
              <Link href={"#skills"}>
              <li className='text-xl sm:text-xl hover:text-white text-[#ADB7BE]'>Skills</li>
              </Link>

            </ul>
            </div>          
        </div>
    </nav>
  )
}

export default Navbar
