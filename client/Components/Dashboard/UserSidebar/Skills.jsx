import React from 'react'
import Tags from './Tags'
const Skills = () => {
  return (
    <>
    <h1 className='font-inter text-xs text-white mb-3'>Skills:</h1>
    <div className='flex flex-row flex-wrap'>
        <Tags tags="UI/UX Design" color='neutral' ></Tags>
        <Tags tags="Frontend" color='neutral' ></Tags>
        <Tags tags="Product" color='neutral' ></Tags>
        <h1 className='font-inter font-semibold text-xs text-main px-3 py-2 rounded-full bg-[#2E2D2D] border-2 border-main ml-2'>+ Add a skill</h1>
    </div>
    </>
  )
}

export default Skills