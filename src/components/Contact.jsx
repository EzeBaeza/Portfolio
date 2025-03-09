import React from 'react'

export const Contact = () => {
  return (
    <div id="contact" className='flex min-h-[70vh] min-w-full
    items-center justify-center'>
        <div className='flex flex-col items-center justify-center gap-3 space-y-6 p-14'>
            <h1 className='text-center text-5xl md:text-7xl'>
                <span className='bg-gradient-to-r from-yellow-500 
                to-pink-500 bg-clip-text text-transparent'> Contactame
                </span>
            </h1>

            <p className='text-center text-lg font-semibold text-gray-500'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, debitis. Facilis ex ea architecto totam. Nesciunt velit possimus quos quia architecto perferendis ut, maiores cupiditate provident, culpa illum hic pariatur?
            </p>

            <a href="mailto:ezeee.baeza@gmail.com" className='text-nowrap rounded-lg border
            border-yellow-500 bg-black px-5 py-3 text-lg font-bold
            text-white shadow-lg shadow-yellow-500 transition-all
            duration-300 hover:-translate-y-2 hover:shadow-xl
            hover:shadow-pink-600'>Contactar</a>
        </div>
    </div>
  )
}
