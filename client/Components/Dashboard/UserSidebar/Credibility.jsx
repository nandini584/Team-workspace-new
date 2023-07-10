import React from 'react'
import CredibilityCircle from './CredibilityCircle'
const Credibility = () => {
  return (
    <div className='flex flex-row items-center'>
    <div className='flex flex-col mr-5'>
     <h1 className='font-jost font-bold text-xl'>Credibility</h1>   
     <h1 className='font-inter font-regular text-sm'>This is explanation for the function of credits.</h1>   
    </div>
    <CredibilityCircle value={65}></CredibilityCircle>
    </div>
  )
}

export default Credibility