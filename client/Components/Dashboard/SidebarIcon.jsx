import React, { useState } from 'react';

const SidebarIcon = ({ iconSrc }) => {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className="flex flex-col items-center space-y-1"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={iconSrc} alt="Icon" className="w-8 h-8" />
      {hover && <div className="w-3 h-3 rounded-full bg-customRed"></div>}
    </div>
  );
};

export default SidebarIcon;
