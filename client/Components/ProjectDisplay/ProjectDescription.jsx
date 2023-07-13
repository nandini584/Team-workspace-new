import React from "react";

function ProjectDescription({ description }) {
  return (
    <div className="mb-8 pt-4">
      <h2 className="text-black font-inter text-3xl font-semibold leading-relaxed flex w-72 h-7 flex-col">
        Product Display
      </h2>
      <p className="font-inter text-base font-normal text-black">
        {description}
      </p>
    </div>
  );
}

export default ProjectDescription;
