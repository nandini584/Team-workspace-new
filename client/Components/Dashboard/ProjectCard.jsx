import React from 'react'
import Tags from "./UserSidebar/Tags"
import Profile from "../../assets/MainDashboard/profileimage.svg"
import LinearProgress from '@mui/material/LinearProgress';
const normalise = (value) => ((value - 0) * 100) / (100 - 0);
const ProjectCard = (props) => {
  return (
    <div className={`h-[20rem] bg-white rounded-2xl p-6 mr-10 mb-5 w-[17rem] px-2`}>
        <div className='flex flex-row justify-between mb-8'>
        <Tags tags="UI/UX Design" color="neutral"></Tags>
        <img src={Profile} alt="profileimg" className='rounded-full w-[2.43rem]' />
        </div>
        <h1 className='font-jost font-bold text-2xl mb-2'>Project Title</h1>
        <h1 className='font-inter font-regular text-sm opacity-50 mb-8'>Project description. This is a short project description. This is a short project decrip. </h1>
        
            <div className='flex flex-row justify-between'>
            <h1 className='font-inter font-regular text-xs'>Progress</h1>
            <h1 className='font-inter font-regular text-xs'>{props.value}%</h1>
            </div>
    <React.Fragment>
        <LinearProgress variant="determinate" style={{ color: "#FF764A" }} value={normalise(props.value)} />
    </React.Fragment>
    <div className='flex flex-row mt-3'>
    <img src={Profile} alt="profileimg" className='rounded-full w-[2rem] mr-2' />
    <img src={Profile} alt="profileimg" className='rounded-full w-[2rem] mr-2' />
    <img src={Profile} alt="profileimg" className='rounded-full w-[2rem] mr-2' />
    </div>
    </div>
  )
}

export default ProjectCard