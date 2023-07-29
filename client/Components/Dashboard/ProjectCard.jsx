import React from 'react'
import Tags from "./UserSidebar/Tags"
import Profile from "../../assets/MainDashboard/profileimage.svg"
import {createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import LinearProgress from '@mui/material/LinearProgress';
const normalise = (value) => ((value - 0) * 100) / (100 - 0);
const ProjectCard = (props) => {
  const theme = createMuiTheme({
    palette: {
       secondary: {
           main: '#42baf5'
       }
    }
  });
  return (
    <div className="h-[18rem] bg-white rounded-2xl p-6 pr-6 pl-6 mr-10 mb-5 w-[17rem] px-2">
        <div className='flex flex-row justify-between mb-8'>
        <Tags tags="UI/UX Design" color="neutral"></Tags>
        <img src={Profile} alt="profileimg" className='rounded-full w-[2.43rem]' />
        </div>
        <h1 className='font-jost font-bold text-xl mb-2'>{props.projectname}</h1>
        <h1 className='font-inter font-regular text-xs opacity-50 mb-8'>{props.projectdescription}</h1>
            <div className='flex flex-row justify-between'>
            <h1 className='font-inter font-regular text-xs'>Progress</h1>
            <h1 className='font-inter font-regular text-xs'>{props.value}%</h1>
            </div>
            <MuiThemeProvider theme={theme}>
            <LinearProgress  sx={{
                  backgroundColor: '#EFEFEF',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#FF764A'
                  },
                 
                  borderRadius:"20px"
                }}
                variant="determinate"
                 value={normalise(props.value)}/> 
          </MuiThemeProvider>
    <div className='flex flex-row mt-3'>
    <img src={Profile} alt="profileimg" className='rounded-full w-[2rem] mr-2' />
    <img src={Profile} alt="profileimg" className='rounded-full w-[2rem] mr-2' />
    <img src={Profile} alt="profileimg" className='rounded-full w-[2rem] mr-2' />
    </div>
    </div>
  )
}

export default ProjectCard