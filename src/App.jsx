import React from "react";
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero";
import { Tech } from "./components/Tech";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";

function App() {

  return (
    <>
      <div className="fixed -z-10 min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar/>
        <Hero/>
        <Experience/>
        <Tech/>
        <Project/>
        <Contact/>
      </main>
    </>
  )
}

export default App
