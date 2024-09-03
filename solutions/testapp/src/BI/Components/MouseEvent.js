import React from 'react';

function Mouse() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  const handleMouseEnter = () => {
    console.log('Mouse entered the button');
  };

  return (
    <button  onClick={handleClick}  
             onMouseEnter={handleMouseEnter}>Insert</button>
  );
}

export default Mouse;