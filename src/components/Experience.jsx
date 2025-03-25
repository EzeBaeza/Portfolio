import React from 'react'
import IBM from '../assets/IBM.png'
import {motion} from 'framer-motion'

export const experienceData = [
  {
    image: IBM,
    title: "Payroll Analyst - IBM",
    description: "Me desempeño como analista de nómina, donde me encargo de la gestión y la administración del cliente. Mis responsabilidades son: Analisis y resolución de desviaciones y discrepancias en la nómina. Mantenimiento y actualización de la base de datos de empleados.",
    description2: " Mi experiencia en este rol me permitió desarrollar habilidades en Análisis y resolución de problemas, Gestión y adminsitración de datos, Colaboración y comunicación efectiva con equipos, cumplimientos de políticas y regulaciones laborales.",
    technologies: ["10/06/2024 - Actualidad"]
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

export const ExperienceCard = ({experience}) => {
  return(
    <ScrollReveal>
      <div id='experience' className='flex flex-col items-center gap-8 md:flex-row
      md:gap-24'>
        <img src={experience.image} alt="" className='w-full
        cursor-pointer rounded-2xl transition-all duration-300
        hover:scale-105 md:w-[300px]'/>

        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-3' >

            <div className='text-xl font-semibold'>{experience.title}</div>
            <p className='text-gray-400'>{experience.description} <br /> {experience.description2}</p>

          </div>

          <div className="flex flex-wrap gap-5">
            {
              experience.technologies.map((tech, index) => (
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

export const Experience = () => {
  return (
    <div id='experience' className='flex min-h-screen w-full flex-col
    items-center justify-center gap-16 p-4 md:px-14 md:py-24'>

      <ScrollReveal>
      <h1 className='text-4xl font-light text-white md:text-6xl'>Experiencia</h1>
      </ScrollReveal>

      <div className='flex w-full max-w-[1000px] flex-col gap-16 text-white'>
        {
          experienceData.map((experience,index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))
        }
      </div>
    </div>
  )
}
