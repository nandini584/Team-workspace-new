import React from 'react';
import SidebarIcon from './SidebarIcon';
import { ReactComponent as Home } from '../../client/assets/MainDashboard/home.svg';
import { ReactComponent as Profile } from '../../client/assets/MainDashboard/profileImage.svg';
import { ReactComponent as Tasks } from '../../client/assets/MainDashboard/task.svg';
import { ReactComponent as Team } from '../../client/assets/MainDashboard/team.svg';
import { ReactComponent as Project } from '../../client/assets/MainDashboard/project.svg';
import { ReactComponent as Chat } from '../../client/assets/MainDashboard/chat.svg';
import { ReactComponent as Notifications } from '../../client/assets/MainDashboard/notifications.svg';


const Sidebar = () => {
    return (
        <div className="h-screen bg-gray-800 text-white w-24 py-7 pr-2 pl-6 absolute inset-y-0 left-0 transform transition duration-200 ease-in-out border-r border-lightGrey flex flex-col justify-start">
            <div className="space-y-6">
                <SidebarIcon Icon={Profile} />
                <SidebarIcon Icon={Home} />
            </div>
            <div className="mt-48 space-y-6">
                <SidebarIcon Icon={Tasks} />
                <SidebarIcon Icon={Team} />
                <SidebarIcon Icon={Project} />
                <SidebarIcon Icon={Chat} />
                <SidebarIcon Icon={Notifications} />
            </div>
        </div>
    );
};

export default Sidebar;
