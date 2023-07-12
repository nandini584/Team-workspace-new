import React from 'react'
import UserSidebar from '../../Components/Dashboard/UserSidebar/UserSidebar'
const CreateProject1 = () => {
  return (
    <div className='flex flex-row bg-[#F8F8F8] sticky'>
        <UserSidebar></UserSidebar>
        <div className="px-14 py-24 flex flex-col">
          <div>
          <h1 className='font-jost font-bold text-2xl'>Create Project</h1>
          <h1 className='font-jost font-regular text-sm'>Use AI tool to generate project description.</h1>
          </div>
          <div className='ml-40 mt-16'>
            <h1 className='font-jost font-medium text-base mb-3'>What cool project are you working on?</h1>
            <input type="text" name='Name' placeholder='Add Projectname' className='border-2 py-4 rounded-lg font-inter font-regular text-sm border-[#54535342] w-[40rem] pl-5 mb-10'/>
            <h1 className='font-jost font-medium text-base mb-3'>Tell us more about your Project.........</h1>
            <input type="text" name='Name' placeholder='Add some keywords about your Project' className='border-2 rounded-lg font-inter font-regular text-sm border-[#54535342] pl-5 pt-4 pr-[28.8rem] pb-[14rem]'/>
          </div>

        </div>
    </div>
  )
}

export default CreateProject1