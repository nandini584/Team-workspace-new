import React from 'react'
import Sidebar from '../../Components/Dashboard/Sidebar'
import Project from '../../Components/Dashboard/Project'
const ProjectPage = () => {
  return (
    <div className='flex flex-row'>
        <Sidebar></Sidebar>
        <div>
            <Project></Project>
        </div>
    </div>
  )
}

export default ProjectPage