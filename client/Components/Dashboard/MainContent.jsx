import React from "react";
import ProgressBar from "./ProgressBar";

const MainContent = () => {
  return (
    <div className="flex-grow ">
      <div className="ml-24 bg-gray-100 p-6 mt-14">
        <h1 className="text-3xl font-semibold ">Progress title</h1>
        <div className="mt-8 md:mt-8 lg:mt-12">
            <ProgressBar />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
