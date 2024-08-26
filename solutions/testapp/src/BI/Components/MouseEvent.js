import React from 'react';

function Mouse() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  const handleMouseEnter = () => {
    console.log('Mouse entered the button');
  };

  return (
    <button  onClick={handleClick}  onMouseEnter={handleMouseEnter}>Insert</button>
  );
}

export default Mouse;