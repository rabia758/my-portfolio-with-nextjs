import Link from 'next/link';
import React  from 'react';

type ILink ={
    tittle:string;
    path:string;
}
const NavLink :ILink[] = [{
    tittle:"Home",
    path:"/",
},
  {
    tittle:"About ",
    path:"#about",
},
{
    tittle:"Contact",
    path:"#contact",
},
{
    tittle:"Projects",
    path:"#Projects",
},
{
    tittle:"skills",
    path:"#skills",
}]

const Navbar = () => {
  return (
    <nav>
        <div className='flex flex-wrap item-center justify-between mx-auto px-2'>
          <Link href={"/"} className='text-white text-2xl md:text-5xl italic font-semibold underline'>Rabia Rizwan</Link>
          <div className='menu md-block flex md:p-0  'id="navbar"  >
            
            <ul className='flex md:flex-row p-2 md:p-0  mt-0 md:space-x-3' >
              <Link href={"/"}>
                <li  className=' pl-3 pr-3 text-[#ADB7BE] text-2xl sm:text-xl sm:text-left rounded md:p-3 hover:text-white'>
                  Home        
                 </li>
              </Link>
              <Link href={"#about"}>
                <li  className=' pl-3 pr-3 text-[#ADB7BE] text-2xl sm:text-xl sm:text-left rounded md:p-3 hover:text-white'>
                  About       
                 </li>
              </Link> 
              <Link href={"#contact"}>
                <li  className=' pl-3 pr-3 text-[#ADB7BE] text-2xl sm:text-xl sm:text-left rounded md:p-3 hover:text-white'>
                  Contact        
                 </li>
              </Link>
              <Link href={"#Projects"}>
                <li  className=' pl-3 pr-3 text-[#ADB7BE] text-2xl sm:text-xl sm:text-left rounded md:p-3 hover:text-white'>
                  Projects       
                 </li>
              </Link> 
              <Link href={"#skills"}>
                <li  className=' pl-3 pr-3 text-[#ADB7BE] text-2xl sm:text-xl sm:text-left rounded md:p-3 hover:text-white'>
                  Skills      
                 </li>
              </Link>   
  


  
   
            </ul>
            

          </div>
        </div>
    </nav>
  )
}

export default Navbar
