import Image from 'next/image';
import ProjectCard from './projectCard';
import React from 'react';

type projects={
    id:number;
    tittle:string;
    image:string;
    description:string;
    gitUrl :string;
    PreviewUrl:string;
}
const Projects:projects[]=[{
    id:1,
    tittle:"Countdown Timer",
    image:"/image/1.png",
    description:"Countdown Timer Built with Nextjs..",
    gitUrl:"/",
    PreviewUrl:"/",
},
{
    id:2,
    tittle:"Weather Widget",
    image:"/image/2.png",
    description:"Weather Widget built with Nextjs..",
    gitUrl:"/",
    PreviewUrl:"/",

},
{
    id:3,
    tittle:"My Portfolio",
    image:"/image/3.png",
    description:"Portfolio built with HTML,CSS....",
    gitUrl:"/",
    PreviewUrl:"/",

},
{
    id:4,
    tittle:"Currency Converter",
    image:"/image/4.png",
    description:"Currency Converter Built With HTML,CSS,Javascript..",
    gitUrl:"/",
    PreviewUrl:"/",

},
{
    id:5,
    tittle:"Resume Builder",
    image:"/image/5.png",
    description:"Resume Builder Built With HTML,CSS,Javascript..",
    gitUrl:"/",
    PreviewUrl:"/",

},
{
    id:6,
    tittle:"Blogging website",
    image:"/image/6.png",
    description:"Blogging Wesite built with Nextjs",
    gitUrl:"/",
    PreviewUrl:"/",

}
]

const Project = () => {
  return (
    <>
    <section className='text-white'>
        <div className='container px-5 py-24 mx-auto ' id='Projects'data-aos="fade-right" >
            <div className='flex flex-col text-center w-full mb-20'data-aos="fade-right">
                <h1 className='sm:text-3xl text-2xl font-bold underline mb-4 hover:text-purple-600'>My Projects</h1>
                <p className='mx-auto text-xl'>This Is The Projects Which I Made It with HTML, CSS, Typescript, Nextjs...</p>
            </div>

            <div className='grid md:grid-cols-3 gap-8 md:gap-12'data-aos="fade-right">
              {Projects.map((projects)=> (
               <ProjectCard
               key={projects.id}
               tittle={projects.tittle}
               describtion={projects.description}
               imagUrl={projects.image}
               gitUrl={projects.gitUrl}
               previewUrl={projects.PreviewUrl}
               />
                ))}
            </div>

        </div>
    </section>
    </>
  )
}

export default Project
