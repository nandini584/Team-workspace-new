import React from "react";
import TaskCard from "./TaskCard";
import "./taskbar.css"

function Dashboard() {
  return (
    <div className="flex justify-around mb-5">
      <div className="flex flex-col min-w-[350px] px-4">
        <div className="column-heading ">To Do</div>
        <TaskCard title="Task title" dueDate="07/20/2023" />
      </div>
      <div className="flex flex-col min-w-[350px] px-4">
        <div className="column-heading ">High Priority</div>
        <TaskCard title="Task title" dueDate="07/15/2023" />
      </div>
      <div className="flex flex-col min-w-[350px] px-4">
        <div className="column-heading ">Done</div>
        <TaskCard title="Task title" dueDate="07/05/2023" />
      </div>
    </div>
  );
}

export default Dashboard;
