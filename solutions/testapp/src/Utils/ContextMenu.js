// src/ContextMenu.js
import React from 'react';

const ContextMenu = ({ position, options, onClose }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        backgroundColor: 'white',
        border: '1px solid #ccc',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        borderRadius: '4px',
      }}
      onMouseDown={(e) => e.preventDefault()} // Prevents menu from closing on click
    >
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => {
              option.action();
              onClose();
            }}
            style={{
              padding: '8px 16px',
              cursor: 'pointer',
              borderBottom: index < options.length - 1 ? '1px solid #ccc' : 'none',
              backgroundColor: '#f9f9f9',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e0e0e0')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f9f9f9')}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContextMenu;
