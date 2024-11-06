"use client";
import Hero from "../components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    
    <main className="flex  min-h-screen flex-col bg-black max-auto px-5 py-3 ">
      <Navbar/>
      <div  className="container max-auto py-2 px-8">

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

