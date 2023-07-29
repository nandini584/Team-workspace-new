import React from "react";

function CircularProgress() {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const progress = 50; // 50% progress
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  return (
    <div className="w-[100px] h-[100px] flex items-center justify-center flex-shrink-0">
      <svg className="w-full h-ful" viewBox="0 0 44 44">
        <circle
          className="stroke-current text-[#a2a1a1]"
          strokeWidth="4"
          fill="transparent"
          r={radius}
          cx="22"
          cy="22"
        />
        <circle
          className="stroke-current text-[#FF764A] stroke-4 transform -rotate-90 origin-center"
          strokeWidth="4"
          fill="transparent"
          r={radius}
          cx="22"
          cy="22"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
    </div>
  );
}

export default CircularProgress;
