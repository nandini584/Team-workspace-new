import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function MainDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default MainDashboard;