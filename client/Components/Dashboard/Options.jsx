import React from 'react'
import create from '../../assets/MainDashboard/create.svg'
import notification from '../../assets/MainDashboard/notification.svg'
import search from '../../assets/MainDashboard/search button.svg'
import { Link } from 'react-router-dom'
const Options = () => {
  return (
    <div className='flex flex-row bg-white py-4 px-11 rounded-xl'>
        <Link to="/api/v1/createproject1/:projectid"><img src={create} alt="create" className='mr-[3rem]'/></Link> 
        <img src={notification} alt="notification" className='mr-[3rem]'/>
        <img src={search} alt="search"/>
    </div>
  )
}

export default Options