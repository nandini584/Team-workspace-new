import React, { useState } from 'react';

const SidebarIcon = ({ Icon }) => {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className="flex flex-col items-center space-y-1"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Icon size={30} />
      {hover && <div className="w-3 h-3 rounded-full bg-customRed"></div>}
    </div>
  );
};

export default SidebarIcon;
