import { HiCodeBracket } from "react-icons/hi2";
import { FaRegEye } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import React from 'react';

interface project {
    imagUrl :"string",
    tittle :"string",
    describtion :"string",
    gitUrl :"string",
    previewurl :"string",
}

const ProjectCard = ({imagUrl,tittle,describtion,gitUrl, previewUrl}:{imagUrl:any,tittle:any,describtion:any,gitUrl:any,previewUrl:any}) => {
  return (
    <div>
      <div className='h-52 md:72 rounded-t-xl relative group' style={{background:`url(${imagUrl})`,backgroundSize:"cover"}}>
        <div className='overlay item-center  justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opcity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'> 
          <Link href={gitUrl} className="h-14 w-14 mr-2 mt-10 border-2 relative rounded-full border-[#ADB7B3] hover:border-white group/link">
          <HiCodeBracket className="h-10 w-10   absolute top-1/2 left-1/2 transfom -translate-y-1/2 -translate-x-1/2 cursor-pointer text-[#ADB7B3] group-hover/link:text-white"/>
          </Link>
          <Link href={previewUrl} className="h-14 w-14 border-2 mt-10 relative rounded-full border-[#ADB7B3] hover:border-white group/link">
          <FaRegEye className="h-10 w-10   absolute top-1/2 left-1/2 transfom -translate-y-1/2 -translate-x-1/2 cursor-pointer text-[#ADB7B3] group-hover/link:text-white"/>
          </Link>

        </div>
      </div>
      <div className='text-white rounded-b-xl  mt-3 bg-[#181818] py-6 px-4' >
        <h2 className='text-xl font-semibold  mb-2'>{tittle}</h2>
        <p className='text-[#ADB7BE]'>{describtion}</p>
      </div>
    </div>
  )
}

export default ProjectCard
