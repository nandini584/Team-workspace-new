import React from "react";

function ProgressBar() {
  return (
    <div
      className="relative mb-5 pt-1"
      style={{
        width: "927px",
        height: "56px",
        flexShrink: 1,
      }}
    >
      <div className="mb-2 flex items-center justify-between text-xs">
        <div className="text-gray-600">Progress</div>
        <div className="text-gray-600">80%</div>
      </div>
      <div className="mb-4 flex h-3 overflow-hidden rounded bg-gray-100" style={{backgroundColor:"#e0dee0"}}>
        <div style={{ width: "80%", backgroundColor:"#ff764a" }} className="bg-green-500"></div>
      </div>
    </div>
  );
}

export default ProgressBar;
