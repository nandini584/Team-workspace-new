import React from "react";
import Collaborator from "./Collaborator";

function ProjectTitle({
  title,
  startDate,
  endDate,
  lead,
  type,
  tags,
  collaborators,
}) {
  return (
    <div className="mb-4">
      <h2 className="text-black font-inter text-3xl font-semibold leading-relaxed flex w-72 h-7 flex-col pb-10">
        {title}
      </h2>

      <p className="font-inter text-base font-normal text-gray-500 mb-2 pt-4">
        <span className="text-[rgb(0,0,0,0.5)]">Duration :</span> {startDate} to{" "}
        {endDate}
      </p>
      <p className="font-inter text-base font-normal mb-2 pt-4">
        <span className="text-[rgb(0,0,0,0.5)]">Team Lead :</span> {lead}
      </p>
      <p className="font-inter text-base font-normal text-gray-500 mb-2 pt-4">
        <span className="text-[rgb(0,0,0,0.5)]">Project Type :</span> {type}
      </p>
      <div className="flex space-x-2 mb-2 pt-4">
        <span className="text-[rgb(0,0,0,0.5)]">Tags :</span>
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-[#ff764a] text-[#fff] rounded-full inline-flex items-center justify-center py-1 px-4 ml-4"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="font-inter text-base font-normal text-gray-500 mb-2 pt-4">
        Collaborators :
      </p>
      <div className="flex space-x-4">
        {collaborators.map((person, index) => (
          <Collaborator key={index} name={person} />
        ))}
      </div>
    </div>
  );
}

export default ProjectTitle;
