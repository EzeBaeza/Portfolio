import React from 'react'
import Gif from '../assets/Gif.jpeg'
import pokedex from '../assets/pokedex.jpeg'
import superhero from '../assets/superhero.jpeg'
import superhero2 from '../assets/superhero.jpeg'
import tesla from '../assets/tesla.jpeg'
import tictactoe from '../assets/tictactoe.jpeg'
import todo from '../assets/todo.jpeg'

import {motion} from 'framer-motion'

export const projectsData = [
  {
    image: Gif,
    title: "Gif app",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eos incidunt officia blanditiis ipsum quasi maiores illo rerum aspernatur, eligendi ea provident ratione iusto libero voluptatem hic ullam modi laborum?",
    technologies: ["HTML", "CSS", "JavaScript", "React"]
  },

  {
    image: pokedex,
    title: "Pokedex",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eos incidunt officia blanditiis ipsum quasi maiores illo rerum aspernatur, eligendi ea provident ratione iusto libero voluptatem hic ullam modi laborum?",
    technologies: ["HTML", "CSS", "JavaScript"]
  },

  {
    image: superhero,
    title: "Superhero app",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eos incidunt officia blanditiis ipsum quasi maiores illo rerum aspernatur, eligendi ea provident ratione iusto libero voluptatem hic ullam modi laborum?",
    technologies: ["HTML", "CSS", "JavaScript", "React"]
  },

  {
    image: tesla,
    title: "Tesla landing",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eos incidunt officia blanditiis ipsum quasi maiores illo rerum aspernatur, eligendi ea provident ratione iusto libero voluptatem hic ullam modi laborum?",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind"]
  },

  {
    image: tictactoe,
    title: "Tic tac toe game",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eos incidunt officia blanditiis ipsum quasi maiores illo rerum aspernatur, eligendi ea provident ratione iusto libero voluptatem hic ullam modi laborum?",
    technologies: ["HTML", "CSS", "JavaScript", "React"]
  },

  {
    image: todo,
    title: "Todo app",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eos incidunt officia blanditiis ipsum quasi maiores illo rerum aspernatur, eligendi ea provident ratione iusto libero voluptatem hic ullam modi laborum?",
    technologies: ["HTML", "CSS", "JavaScript", "React"]
  },
]

const ScrollReveal = ({children}) => {
  return (
    <motion.div
      initial={{opacity:0, y:100}}
      whileInView={{opacity:1, y:0}}
      viewport={{once: true}}
      transition={{duration:0.8}}
    >
      {children}
    </motion.div>
  )
}

export const ProjectCard = ({project}) => {
  return(
    <ScrollReveal>
      <div id='proyect' className='flex flex-col items-center gap-8 md:flex-row
      md:gap-24'>
        <img src={project.image} alt="" className='w-full
        cursor-pointer rounded-2xl transition-all duration-300
        hover:scale-105 md:w-[300px]'/>

        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-3' >

            <div className='text-xl font-semibold'>{project.title}</div>
            <p className='text-gray-400'>{project.description}</p>

          </div>

          <div className="flex flex-wrap gap-5">
            {
              project.technologies.map((tech, index) => (
                <span key={index} className='rounded-lg bg-black'>
                  {tech}
                </span>
              ))
            }
          </div>

        </div>


      </div>
    </ScrollReveal>
  )
}

export const Project = () => {
  return (
    <div id='projects' className='flex min-h-screen w-full flex-col
    items-center justify-center gap-16 p-4 md:px-14 md:py-24'>

      <ScrollReveal>
      <h1 className='text-4xl font-light text-white md:text-6xl'>Mis proyectos</h1>
      </ScrollReveal>

      <div className='flex w-full max-w-[1000px] flex-col gap-16 text-white'>
        {
          projectsData.map((project,index) => (
            <ProjectCard key={index} project={project}/>
          ))
        }
      </div>
    </div>
  )
}
