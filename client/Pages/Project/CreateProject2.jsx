import React from 'react'
import UserSidebar from '../../Components/Dashboard/UserSidebar/UserSidebar'
import { Link } from 'react-router-dom'
import Frontarrow from '../../assets/MainDashboard/front.svg'
const CreateProject2 = () => {
  return (
    <div className='flex flex-row bg-[#F8F8F8] sticky'>
        <UserSidebar></UserSidebar>
        <div className="px-14 py-24 flex flex-col">
          <div>
          <h1 className='font-jost font-bold text-2xl'>Create Project</h1>
          <h1 className='font-jost font-regular text-sm'>Use AI tool to generate project description.</h1>
          </div>
          <div className='flex flex-row items-center justify-center'>
           <Link to="/api/v1/createproject1/:projectid"><img src={Frontarrow} alt="createprojectimg"/></Link> 
          <div className=' flex flex-col ml-40 mt-16'>
            
            <div className=''>

            <h1 className='font-jost font-medium text-base mb-2'>Invite Friends</h1>
            <h1 className='font-jost font-medium text-xs opacity-50 mb-2'>Invite via email</h1>
            <input type="text" name='Name' placeholder='Type member’s email here' className='border-2 py-4 rounded-lg font-inter font-regular text-sm border-[#54535342] w-[39.2rem] pl-5 mb-5'/>
            </div>
            <button className='font-bold text-xs w-[9rem] py-3 rounded-lg px-2 text-white font-jost bg-main mb-14'>SEND INVITE</button>
            <h1 className='font-jost font-medium text-base mb-3'>Enter the Project Duration</h1>
            <div className='flex flex-row'>
            <input type="Date" name='Name' placeholder='Start Date' className='border-2 rounded-lg font-inter font-regular text-sm border-[#54535342] pl-5 py-4 mr-4 pr-40'/>
            <input type="Date" name='Name' placeholder='End Date' className='border-2 rounded-lg font-inter font-regular text-sm border-[#54535342] pl-5 py-4 pr-40'/>
            </div>
           <Link to="/api/v1/projectdashboard/:userid"><button className='font-bold text-xs w-[9rem] py-3 rounded-lg px-2 text-white font-jost bg-main mb-10 mt-5'>CREATE PROJECT</button></Link> 
          </div>
          </div>

        </div>
    </div>
  )
}

export default CreateProject2