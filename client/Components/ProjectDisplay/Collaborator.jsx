import React from "react";
import ellipseImage from "../../assets/ProjectDisplay/ellipse.svg";

function Collaborator({ name }) {
  return (
    <div className="flex flex-col items-center">
      <img src={ellipseImage} alt="Profile" className="w-[58px] h-[58px] rounded-full" />
      <p className="font-inter font-semibold text-base text-black ml-3">{name}</p>
    </div>
  );
}

export default Collaborator;
