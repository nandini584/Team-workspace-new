import React from 'react'
import UserSidebar from '../../Components/Dashboard/UserSidebar/UserSidebar'
import ProjectCard from '../../Components/Dashboard/ProjectCard'
import Options from '../../Components/Dashboard/Options'
import Tabs from '../../Components/Dashboard/Tabs'
const PersonalDashboard = () => {
  return (
    <>
    
    <div className='flex flex-row bg-[#F8F8F8] sticky'>
        <UserSidebar></UserSidebar>
        <div className="px-14 py-24 flex flex-col overflow-y-scroll">
          <div className='flex flex-row items-center justify-between'>
        <Tabs></Tabs>
        <Options></Options>
          </div>
          <div className='mt-14 flex flex-row flex-wrap'>
        <ProjectCard value={78}></ProjectCard>
        <ProjectCard value={78}></ProjectCard>
        <ProjectCard value={78}></ProjectCard>
        <ProjectCard value={78}></ProjectCard>
        <ProjectCard value={78}></ProjectCard>
        <ProjectCard value={78}></ProjectCard>

          </div>

        </div>
    </div>
    </>
  )
}

export default PersonalDashboard