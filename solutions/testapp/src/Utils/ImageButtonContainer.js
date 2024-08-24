// src/App.js
import React from 'react';
import ImageButton from './ImageButton';
 
const ImageButtonContainer = () => {

  const handleCut = () => { console.log('Cut action'); };

  const handleCopy = () => {console.log('Copy action');};
  const handlePaste = () => {console.log('Paste action');};
  const handleSave = () => {console.log('Save action');};
  const handleOpen = () => {console.log('Open action');};

  return (
    <div style={{ padding: '20px' }}>
      <h1>Image Button Example</h1>
      <ImageButton  imageSrc="/images/icons/cut-icon.png" altText="Cut"  onClick={handleCut} />
      <ImageButton  imageSrc="/images/icons/copy-icon.png" altText="Copy"  onClick={handleCopy} />
      <ImageButton  imageSrc="/images/icons/paste-icon.png" altText="Paste"  onClick={handlePaste} />
      <ImageButton  imageSrc="/images/icons/open-icon.png" altText="Open"  onClick={handleOpen} />
      <ImageButton  imageSrc="/images/icons/save-icon.png" altText="Save"  onClick={handleSave} />
    </div>
  );
};

export default ImageButtonContainer;
