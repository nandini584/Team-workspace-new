import React from 'react';
import Sidebar from './Sidebar';

function MainDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="p-10">
        <h1 className="text-2xl">Progress Title</h1>
        <p className="pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla.</p>
      </main>
    </div>
  );
}

export default MainDashboard;
