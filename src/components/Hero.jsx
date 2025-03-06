import React from 'react'
import perfil from '../assets/perfil.jpeg'
import {motion} from 'framer-motion'

export const Hero = () => {
  return (
    <div id='home' className='px-16 flex-col flex min-h-screen w-full
    items-center justify-center py-28 md:px-32'>
      <div className='flex flex-col items-center justify-center gap-10 text-white'>
        <motion.div
          initial={{y: -50, opacity: 0}}
          animate={{y: 0, opacity:1}}
          transition={{duration: 0.8, delay:0.2}}

        >
          <img src={perfil} alt="" className='w-[350px] mb-5
          cursor-pointer rounded-full shadow-x1 shadow-indigo-900
          transition-all duration-300 hover:-translate-y-5
          hover:scale-105 hover:shadow-2x1 hover:shadow-indigo-600
          md:w-[350px]'/>
        </motion.div>
      </div>

      <motion.div 
        initial={{y: 50, opacity: 0}}
        animate={{y: 0, opacity:1}}
        transition={{duration: 0.8, delay:0.2}}

      className='flex max-w-[600px] flex-col items-center
      justify-center gap-3 text-center'>
        <h1 className='bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent
        text-5xl font-light md:text-7xl'>Ezequiel Baeza</h1>

        <h3 className='bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent
        text-2xl md:text-3xl'> Web Developer</h3>

        <p className='md:text-base text-pretty text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae perferendis quos nulla! Animi facilis tempore, illo nihil molestiae ullam vero quaerat iure deserunt quia porro id libero quas aut voluptatibus.</p>

      </motion.div>
    </div>
  )
}
