// src/Toolbar.js
import React from 'react';

const Toolbar = ({ onButtonClick }) => {
  return (
    <div style={styles.toolbar}>
      <button onClick={() => onButtonClick('bold')} style={styles.button}>Bold</button>
      <button onClick={() => onButtonClick('italic')} style={styles.button}>Italic</button>
      <button onClick={() => onButtonClick('underline')} style={styles.button}>Underline</button>
      <button onClick={() => onButtonClick('save')} style={styles.button}>Save</button>
      <button onClick={() => onButtonClick('open')} style={styles.button}>Open</button>
    </div>
  ); 
  
 

};

// Basic styling for the toolbar
const styles = {
  toolbar: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    backgroundColor: '#f1f1f1',
    borderBottom: '1px solid #ccc',
  },
  button: {
    padding: '8px 12px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Toolbar;
