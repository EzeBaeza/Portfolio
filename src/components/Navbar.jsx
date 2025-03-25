
import React, { useState } from 'react'
import { BiMenu, BiX } from 'react-icons/bi';
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='fixed top-0 z-10 flex w-full items-center
    justify-between border-b border-b-gray-700 bg-gray/70 px-16
    py-6 text-white backdrop-blur-md md:justify-evently'>
      <a href="home" className='bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent opacity-80
      text-3xl font-semibold transition-all duration-300
      hover:opacity-100'>Ezequiel</a>

      <ul className='hidden md:flex gap-10'>
        <a href="#home" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
          <li>Inicio</li>
        </a>

        <a href="#experience" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
          <li>Experiencia</li>
        </a>

        <a href="#tech" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
          <li>Tecnologías</li>
        </a>

        <a href="#proyect" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
          <li>Proyectos</li>
        </a>

        <a href="#contact" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
          <li>Contacto</li>
        </a>

      </ul>

      <ul className='hidden md:flex gap-5'>
        
        <li className='cursor-pointer text-xl opacity-70
        transition-all duration-300 hover:text-blue-500
        hover:opacity-100'>
          <a href="https://www.linkedin.com/in/ezequiel-baeza-166727229">
            <BsLinkedin/>
          </a>
        </li>

        <li className='cursor-pointer text-xl opacity-70
        transition-all duration-300 hover:text-red-500
        hover:opacity-100'>
          <a href="https://github.com/EzeBaeza">
            <BsGithub/>
          </a>
        </li>

      </ul>

      {isOpen ? (
        <BiX className='block md:hidden text-4xl' onClick={menuOpen} />
      ) : (
        <BiMenu className='block md:hidden text-4xl' onClick={menuOpen}/>
      )}

      {isOpen && (
        <div className={`fixed right-0 top-[84px] flex h-screen
        w-1/2 flex-col items-start justify-start gap-10 border-1 
        border-gray-800 bg-black/90 p-12 ${isOpen ? "block" : "hidden"} `}>

          <ul className='flex flex-col gap-8'>
            <a href="#home" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
              <li>Inicio</li>
            </a>

            <a href="#experience" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
              <li>Experiencia</li>
            </a>

            <a href="#tech" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
              <li>Tecnologías</li>
            </a>

            <a href="#proyect" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
              <li>Proyectos</li>
            </a>

            <a href="#contact" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
              <li>Contacto</li>
            </a>
          </ul>

          <ul className='flex flex-wrap gap-4'>

            <li className='cursor-pointer text-xl opacity-70
              transition-all duration-300 hover:text-green-500
              hover:opacity-100'>
                <BsWhatsapp/>
              </li>
              
              <li className='cursor-pointer text-xl opacity-70
              transition-all duration-300 hover:text-blue-500
              hover:opacity-100'>
                <BsLinkedin/>
              </li>

              <li className='cursor-pointer text-xl opacity-70
              transition-all duration-300 hover:text-red-500
              hover:opacity-100'>
                <BsGithub/>
              </li>

      </ul>


        </div>
  
      )}

    </nav>
  )
}
