import React from 'react';
import SidebarIcon from './SidebarIcon';

import Profile from '../../assets/MainDashboard/profileImage.svg';
import Home from '../../assets/MainDashboard/home.svg';
import Tasks from '../../assets/MainDashboard/task.svg';
import Team from '../../assets/MainDashboard/team.svg';
import Project from '../../assets/MainDashboard/project.svg';
import Chat from '../../assets/MainDashboard/chat.svg';
import Notifications from '../../assets/MainDashboard/notifications.svg';

function Sidebar() {
  return (
    <div className="h-screen bg-blue-500 w-16 flex flex-col items-center py-8 space-y-8 border-r border-lightGray">
      <div className="flex flex-col items-center space-y-8">
        <SidebarIcon iconSrc={Profile} />
        <SidebarIcon iconSrc={Home} />
      </div>

      <div className="h-32"></div>

      <div className="flex flex-col items-center space-y-8">
        <SidebarIcon iconSrc={Tasks} />
        <SidebarIcon iconSrc={Team} />
        <SidebarIcon iconSrc={Project} />
        <SidebarIcon iconSrc={Chat} />
        <SidebarIcon iconSrc={Notifications} />
      </div>

      <div className="flex-grow"></div>
    </div>
  );
}

export default Sidebar;
