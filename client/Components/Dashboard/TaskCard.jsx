import React from "react";

function TaskCard({ title, dueDate }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 mb-4">
      <span className="bg-[#ff764a] text-[#fff] rounded-full inline-flex items-center justify-center py-1 px-3">
        Skills
      </span>
      <h2 className="text-black font-semibold text-lg mt-2">{title}</h2>
      <p className="text-gray-500 text-xs font-light text-right">
        Due {dueDate}
      </p>
    </div>
  );
}

export default TaskCard;
