import React from "react";

function ProgressBar() {
  return (
    <div className="relative mb-5 pt-1 flex-shrink-0 w-full max-w-[927px] h-[56px]">
      <div className="mb-2 flex items-center justify-between text-xs">
        <div className="text-gray-600">Progress</div>
        <div className="text-gray-600">80%</div>
      </div>
      <div className="mb-4 flex h-3 overflow-hidden rounded bg-[#eae8e8]">
        <div className="w-4/5 bg-green-500 bg-[#FF764A]"></div>
      </div>
    </div>
  );
}

export default ProgressBar;
