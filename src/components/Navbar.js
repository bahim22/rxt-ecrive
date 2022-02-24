import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/solid'

const Navbar = () => {
  return (
    <header className='bg-gray-900 md:sticky top-2 z-5'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border1 md:border-gray-700 flex flex-wrap items-center text-base justify-center'>
        <a className='title-font font-medium text-white mb-4 md:mb-0'>  </a>
          <a href='#about' className='ml-3 text-l'>
            Hima Dionysus Balde
          </a> <br />
          <a href='#projects'>Current Projects</a><br />
          <a href='#skills'>Skills</a><br />
          <a href='#software'>Software</a><br />
          <a href='#contact'>Available for Hire</a>
          <div className='inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'>
          <ArrowRightIcon className='w-4 h-2 mx-1 my-1' />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
