import React, { useRef,useEffect, useState } from 'react';

const RubberBand = () => {

  
  let  startPoint= {x:0,y:0};
  let endPoint={x:0,y:0};
  let oldPoint={x:0,y:0};

  const canvasRef = useRef(null);
  

  useEffect(() => {

    let isMouseDown = false;
    let initialX = 0;

    const handleMouseDown = (e) => {
      isMouseDown = true;
      initialX = e.clientX;
      console.log("mouse downn ");
      let point={
        x:e.clientX,
        y:e.clientY
      };

      startPoint=point;
      console.log("mouse move " +point);

    };

    const handleMouseMove = (e) => {
      if (isMouseDown) {
       
        
        let point={
          x:e.clientX,
          y:e.clientY
        };
        endPoint=point;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.fillStyle = "white";
        const rect = canvas.getBoundingClientRect();

        const coordinates = {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
        };
        
        ctx.fillRect(coordinates.top,coordinates.left, coordinates.width,coordinates.height);
        ctx.moveTo(startPoint.x,startPoint.y);
        ctx.lineTo(endPoint.x,endPoint.y);
        ctx.strokeStyle = 'darkred';
        ctx.stroke();
        

        oldPoint=endPoint;
        ctx.beginPath();
        ctx.moveTo(startPoint.x,startPoint.y);
        ctx.lineTo(oldPoint.x,oldPoint.y);
        ctx.strokeStyle = 'white';
        ctx.stroke();
  
        console.log("mouse move " +point);
      }
    };

    const handleMouseUp = (e) => {
      isMouseDown = false;
      console.log("mouse up ");
      let point={
        x:e.clientX,
        y:e.clientY
      };


      endPoint=point;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.moveTo(startPoint.x,startPoint.y);
      ctx.lineTo(endPoint.x,endPoint.y);
      ctx.strokeStyle = 'darkred';
      ctx.stroke();
      console.log("mouse move " + point.x + " , "+ point.y);
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <canvas ref={canvasRef} width={400} height={200} style={{ border: '1px solid black' }} ></canvas>
  );
};

export default RubberBand;
