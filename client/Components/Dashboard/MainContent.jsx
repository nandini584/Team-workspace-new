import React from "react";
import ProgressBar from "./ProgressBar";
import Dashboard from "./TaskDashBoard";
import CircularProgress from "./CircularProgress";
import ProjectTitle from "./ProjectTitle";

const MainContent = () => {
  return (
    <div className="flex-grow p-4">
      <div className=" bg-gray-100 p-6 mt-14 ml-11">
        <ProjectTitle title="Project Title"/>
        <div className="flex items-center space-x-6 mt-8 md:mt-8 lg:mt-12">
          <ProgressBar />
          <CircularProgress />
        </div>
      </div>
      <Dashboard />
    </div>
  );
};

export default MainContent;
