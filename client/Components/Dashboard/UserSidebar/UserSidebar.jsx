import React from 'react'
import Profile from './Profile'
import Skills from './Skills'
import Credibility from './Credibility'
import Stats from './Stats'
const UserSidebar = () => {
  return (
    <div className='bg-[#2E2D2D] rounded-r-2xl h-[100vh] w-[25rem] px-12 py-24'>
      <div className='mb-10 w-[18rem]'>
        <Profile></Profile>
      </div>
      <div className='mb-10 w-[18rem]'>
        <Skills></Skills>
      </div>
      <div className='mb-10 w-[18rem]'>
        <Credibility></Credibility>
      </div>
        <Stats val1={0} val2={0} val3={0} val4={0}></Stats>
    </div>
  )
}

export default UserSidebar