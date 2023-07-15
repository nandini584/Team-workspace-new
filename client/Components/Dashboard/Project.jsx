import React from 'react'
import ProjectTable from '../Project/ProjectTable'
import ProjectTitle from '../ProjectDisplay/ProjectTitle'
import ProjectDescription from '../ProjectDisplay/ProjectDescription'
const Project = ({ data }) => {
  return (
    <div className='flex flex-col'>
            <ProjectTitle {...data}></ProjectTitle>
            <ProjectDescription description={data.description} />
            <ProjectTable></ProjectTable>
    </div>
  )
}

export default Project