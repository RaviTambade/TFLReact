import React from 'react';

const ImageButton = ({ imageSrc, altText, onClick }) => {
  return (
    <button onClick={onClick} 
            style={{    border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                        padding: '0',
                        display: 'inline-flex',
                        alignItems: 'center',
                    }}>
      <img  src={imageSrc} alt={altText}  style={{ width: '24px', height: '24px', objectFit: 'cover' }} />
    </button>
  );
};

export default ImageButton;