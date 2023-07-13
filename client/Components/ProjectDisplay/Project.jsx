import React from 'react';
import backIcon from '../../assets/ProjectDisplay/back.svg';
import MainContent from './MainContent';

const sampleData = {
  title: "Sample Project",
  startDate: "2022-01-01",
  endDate: "2022-12-31",
  lead: "John Doe",
  type: "Personal",
  tags: ["React", "Tailwind","Github"],
  collaborators: ["Collab 1", "Collab 2", "Collab 3"]
};

const Project = () => {
  return (
    <div className="container mx-auto px-4">
      <button 
        className="absolute top-10 left-10 md:top-0 md:left-8"
        onClick={() => {
          // function to go back
        }}
      >
        <img src={backIcon} alt="back" className="h-6 w-6" />
      </button>
      <div className="mt-16 md:mt-27 ml-8 md:ml-18">
        <MainContent data={sampleData} />
      </div>
    </div>
  );
};

export default Project;
