import React, { useState } from "react";

function TaskCard({ title, dueDate, skill }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-5 mb-4">
      <span className="bg-[#ff764a] text-[#fff] rounded-full inline-flex items-center justify-center py-1 px-3">
        {skill}
      </span>
      <div className="flex items-center mt-2">
        <div
          className={`w-4 h-4 border-2 border-black rounded mr-2 cursor-pointer ${
            isChecked ? "bg-[#A3A3A3]" : "bg-white"
          }`}
          onClick={handleCheckboxClick}
        >
          {isChecked && <div className="w-3 h-3 bg-[#A3A3A3] m-auto"></div>}
        </div>
        <h2 className="text-black font-semibold text-lg">{title}</h2>
      </div>
      <p className="text-gray-500 text-xs font-light text-right">
        Due {dueDate}
      </p>
    </div>
  );
}

export default TaskCard;
