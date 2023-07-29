import React from "react";
import UserSidebar from "../../Components/Dashboard/UserSidebar/UserSidebar";
import ProjectCard from "../../Components/Dashboard/ProjectCard";
import Options from "../../Components/Dashboard/Options";
import Tabs from "../../Components/Dashboard/Tabs";
const PersonalDashboard = (props) => {
  const { formData } = props.location.state;
  const { projectname, projectdescription } = formData;
  return (
    <>
      <div className="flex flex-row bg-[#F8F8F8] sticky h-1/2">
        <UserSidebar></UserSidebar>
        <div className="px-14 py-8 flex flex-col">
          <div className="flex flex-row items-center justify-between">
            <Tabs></Tabs>
            <Options></Options>
          </div>

            <div className="mt-10 flex flex-column flex-wrap overflow-y-scroll h-[38rem]"  style={{overflow : 'scroll'}}>
              <ProjectCard value={66} title={projectname} desc={projectdescription}></ProjectCard>
              {/* <ProjectCard value={78}></ProjectCard>
              <ProjectCard value={78}></ProjectCard>
              <ProjectCard value={78}></ProjectCard>
              <ProjectCard value={78}></ProjectCard>
              <ProjectCard value={78}></ProjectCard>
              <ProjectCard value={78}></ProjectCard>
              <ProjectCard value={78}></ProjectCard>
              <ProjectCard value={78}></ProjectCard> */}
            </div>
          </div>

      </div>
    </>
  );
};

export default PersonalDashboard;
