import React from 'react'
import Profileimg from '../../../assets/MainDashboard/profileImage.svg'
const Profile = () => {
  return (
    <div className='flex flex-row items-center'>
        <img src={Profileimg} alt="profile img" />
        <div className='flex flex-col ml-4'>
            <h1 className='font-jost font-medium text-sm'>Good Morning,</h1>
            <h1 className='font-jost font-bold text-2xl'>Christopher</h1>
        </div>
    </div>
  )
}

export default Profile