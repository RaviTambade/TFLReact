import React, { useRef, useEffect } from 'react';

function Graphics() {
  const canvasRef = useRef(null);

  useEffect(() => {
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Draw a rectangle
    ctx.fillStyle = 'blue';
    ctx.fillRect(10, 10, 100, 100);

    // Draw a circle
    ctx.beginPath();
    ctx.arc(200, 60, 50, 0, Math.PI * 2, false);
    ctx.fillStyle = 'red';
    ctx.fill();

    // Draw a line
    ctx.beginPath();
    ctx.moveTo(10, 150);
    ctx.lineTo(200, 150);
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 5;
    ctx.stroke();
  }, []);

  return (
    <canvas ref={canvasRef} width={400} height={200} style={{ border: '1px solid black' }} ></canvas>
  );
}

export default Graphics;