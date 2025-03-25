import React from 'react'
import Gif from '../assets/Gif.jpeg'
import pokedex from '../assets/pokedex.jpeg'
import tesla from '../assets/tesla.jpeg'
import tictactoe from '../assets/tictactoe.jpeg'
import todo from '../assets/todo.jpeg'

import {motion} from 'framer-motion'
import { BsGithub } from 'react-icons/bs'

export const projectsData = [
  {
    image: Gif,
    title: "Gif app",
    description: "Buscador de GIFs en tiempo real utilizando la API de Giphy. Permite a los usuarios encontrar y visualizar GIFs de diversas categorías con una interfaz rápida y amigable. Ideal para compartir y explorar contenido animado.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    githubLink: "https://github.com/EzeBaeza/react-gif-expert"
  },

  {
    image: pokedex,
    title: "Pokedex",
    description: "Aplicación interactiva que muestra información detallada de Pokémon utilizando la API de PokéAPI. Permite buscar y explorar diferentes criaturas con sus estadísticas, tipos y habilidades, todo en una interfaz dinámica y atractiva.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink:"https://github.com/EzeBaeza/Pokedex"
  },

  {
    image: tesla,
    title: "Tesla landing",
    description: "Landing page moderna y responsiva desarrollada con React y Tailwind. Diseñada para ofrecer una experiencia de usuario intuitiva y elegante, ideal para promocionar productos o servicios con un diseño minimalista y profesional.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
    githubLink:"https://github.com/EzeBaeza/Tesla-landing"
  },

  {
    image: tictactoe,
    title: "Tic tac toe game",
    description: "Un clásico juego de Ta Te Ti desarrollado en React, donde dos jugadores compiten para alinear tres símbolos en una cuadrícula. Implementa lógica de victoria y reinicio, con una interfaz simple y atractiva.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
    githubLink:"https://github.com/EzeBaeza/React-tres-en-linea"
  },

  {
    image: todo,
    title: "Todo app",
    description: "Aplicación de gestión de tareas que permite agregar, editar y eliminar pendientes. Construida con React y almacenamiento local para guardar el progreso del usuario. Una herramienta simple pero eficiente para la productividad diaria.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
    githubLink:"https://github.com/EzeBaeza/JournalApp"
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

export const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div id="proyect" className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-5 items-center">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black px-3 py-1 text-white text-sm">
                {tech}
              </span>
            ))}

            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all duration-300"
              >
                <BsGithub className="text-xl" />GitHub
              </a>
            )}
          </div>
        </div>

      </div>
    </ScrollReveal>
  );
};

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
