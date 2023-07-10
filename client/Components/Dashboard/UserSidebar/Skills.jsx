import React from 'react'
import Tags from './tags'
const Skills = () => {
  return (
    <div className='flex flex-row flex-wrap'>
        <Tags tags="UI/UX Design" color='neutral' ></Tags>
        <Tags tags="Frontend" color='neutral' ></Tags>
        <Tags tags="Product" color='neutral' ></Tags>
        <h1 className='font-inter font-bold text-sm text-main px-6 py-2 rounded-full bg-white border-2 border-main ml-2'>+ Add a skill</h1>
    </div>
  )
}

export default Skills