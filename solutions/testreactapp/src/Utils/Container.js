// src/App.js
import React, { useState } from 'react';
import ContextMenu from './ContextMenu';

const Container = () => {
  const [contextMenu, setContextMenu] = useState(null);

  const handleContextMenu = (event) => {
    event.preventDefault(); // Prevent the default browser context menu
    setContextMenu({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleClick = () => {
    setContextMenu(null); // Hide context menu when clicking elsewhere
  };

  const handleOptionClick = (option) => {
    console.log(`Selected: ${option}`);
    setContextMenu(null);
  };

  return (
    <div onClick={handleClick} style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <textarea onContextMenu={handleContextMenu} // Show context menu on right-click
                style={{ width: '300px', height: '150px', margin: '50px' }} />
      {contextMenu && (
        <ContextMenu
          position={contextMenu}
          options={[
            { label: 'Cut', action: () => handleOptionClick('Cut') },
            { label: 'Copy', action: () => handleOptionClick('Copy') },
            { label: 'Paste', action: () => handleOptionClick('Paste') },
          ]}
          onClose={() => setContextMenu(null)}
        />
      )}
    </div>
  );
};

export default Container;