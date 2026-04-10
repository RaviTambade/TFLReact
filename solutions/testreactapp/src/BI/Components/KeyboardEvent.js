import React, { useState } from 'react';

function Keyboard() {
    
  const [key, setKey] = useState('');

  const handleKeyDown = (event) => {
    setKey(event.key);
    console.log(`Key pressed: ${event.key}`);
  };

  return (
    <div tabIndex="0" // Makes the div focusable so it can receive keyboard events
         onKeyDown={handleKeyDown}>
      <p>Press any key while this div is focused.</p>
      <p>Last pressed key: {key}</p>
    </div>
  );
}

export default Keyboard;