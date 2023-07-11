import React from 'react'

const Stats = (props) => {
  return (
    <div className='flex flex-col text-white'>
        <div className='flex flex-row mb-14 '>
            <div className='mr-20'>
            <h1 className='font-inter font-regular text-sm mb-4'>Total Projects:</h1>
            <h1 className='font-inter font-medium text-3xl border-l-main border-l-4 pl-3 border-spacing-3'>{props.val1}</h1>
            </div>
            <div>
            <h1 className='font-inter font-regular text-sm mb-4'>Completed Projects:</h1>
            <h1 className='font-inter font-medium text-3xl border-l-main border-l-4 pl-3 border-spacing-3'>{props.val2}</h1>
            </div>
        </div>
        <div className='flex flex-row'>
        <div className='mr-9'>
            <h1 className='font-inter font-regular text-sm mb-4'>Projects in Progress:</h1>
            <h1 className='font-inter font-medium text-3xl border-l-main border-l-4 pl-3 border-spacing-3'>{props.val3}</h1>
            </div>
            <div>
            <h1 className='font-inter font-regular text-sm mb-4'>Projects Overdue:</h1>
            <h1 className='font-inter font-medium text-3xl border-l-main border-l-4 pl-3 border-spacing-3'>{props.val4}</h1>
            </div>
        </div>
    </div>
  )
}

export default Stats