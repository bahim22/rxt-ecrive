import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/solid'

const Navbar = () => {
  return (
    <header className='bg-gray-900 md:sticky top-0 z-10'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <a className='title-font font-medium text-white mb-4 md:mb-0'>
          <a href='#about' className='ml-3 text-xl'>
            Hima Dionysus Balde
          </a>
        </a>
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border1 md:border-gray-700 flex flex-wrap items-center text-base justify-center'>
          <a href='projects'>Current Projects</a>
          <a href='skills'>Skills</a>
          <a href='softwares'>Software</a>
        </nav>
        <a
          href='#contact'
          className='inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'>
          Available for Hire
          <ArrowRightIcon className='w-4 h-4 ml-1' />
        </a>
      </div>
    </header>
  )
}

export default Navbar
