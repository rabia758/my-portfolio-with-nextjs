"use client"
import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect (()=>{
    Aos.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    })
    Aos.refresh();
  }, [])

  return (
    
    <main className="flex min-h-screen flex-col bg-black max-auto py-4 px-12">
      <Navbar/>
      <div className="container max-auto py-4 px-12">

      <Hero/>
      <About/>
      <Contact/>
      <Project/>
      <Skills/>
      <Footer/>
  
      </div>

       </main>
  );
}

