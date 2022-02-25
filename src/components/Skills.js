// import { ChipIcon, BadgeCheckIcon } from '@heroicons/react/solid'
import React from 'react'
import { skills } from '../data'

const Skills = () => {
  return (
    <section id='skills'>
      <div className='container px-5 py-10 mx-auto'>
        <div className='text-center mb-20'>
          {/* <ChipIcon className='w-10 inline-block mb-4' /> */}
          <h1 className='sm:text-4xl text-3xl font-medium title-font text-white mb-4'>Skills &amp; Technologies</h1>
          <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia voluptatum deleniti tempore quidem.
          </p>
        </div>
        <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb- -mx-2'>
          {skills.map((skill) => (
            <div key={skill} className='p-2 sm:w-1/2 w-full'>
              <div className='bg-gray-800 rounded flex p-4 h-full items-center'>
                {/* <BadgeCheckIcon className='text-blue-300 w-6 h-6 flex-shrinl-0 mr-4' /> */}
                <span className='title-font font-medium text-red-700'>{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
