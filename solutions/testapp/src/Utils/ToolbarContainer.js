// src/App.js
import React, { useState } from 'react';
import Toolbar from './Toolbar';

const ToolbarContainer = () => {
  const [content, setContent] = useState('');

  const handleButtonClick = (action) => {
    switch(action) {
      case 'bold':
        setContent(content + ' <b>Bold</b>');
        break;
      case 'italic':
        setContent(content + ' <i>Italic</i>');
        break;
      case 'underline':
        setContent(content + ' <u>Underline</u>');
        break;
      case 'save':
        alert('Save functionality not implemented.');
        break;
      case 'open':
        alert('Open functionality not implemented.');
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Toolbar onButtonClick={handleButtonClick} />
      <div
        contentEditable
        style={{ border: '1px solid #ccc', minHeight: '200px', marginTop: '10px', padding: '10px' }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default ToolbarContainer;
