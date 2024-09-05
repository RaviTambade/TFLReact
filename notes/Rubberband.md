# Rubber band Line Effect

Creating a "rubber band" line effect involves drawing a line that stretches and contracts, similar to a rubber band, in response to user interactions or animations. You can achieve this effect using HTML5 Canvas and JavaScript. Here’s a step-by-step guide to creating this effect:

### 1. **Set Up HTML and CSS**

First, create a basic HTML structure and style the canvas.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rubber Band Line Effect</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
        }
        canvas {
            display: block;
        }
    </style>
</head>
<body>
    <canvas id="canvas"></canvas>
    <script src="script.js"></script>
</body>
</html>
```

### 2. **JavaScript for Rubber Band Effect**

Create a `script.js` file and add the following JavaScript code:

```javascript
// script.js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let startX, startY, endX, endY;
let isDrawing = false;

// Track mouse events
canvas.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    startY = e.clientY;
    isDrawing = true;
});

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        endX = e.clientX;
        endY = e.clientY;
        draw();
    }
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    clearCanvas();
});

function draw() {
    clearCanvas();

    const distance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
    const tension = Math.min(0.1 * distance, 50); // Maximum tension to avoid excessive stretching

    ctx.beginPath();
    ctx.moveTo(startX, startY);

    // Calculate control points for cubic Bezier curve
    const ctrlX1 = startX + (endX - startX) / 3;
    const ctrlY1 = startY + (endY - startY) / 3 - tension;
    const ctrlX2 = endX - (endX - startX) / 3;
    const ctrlY2 = endY - (endY - startY) / 3 + tension;

    ctx.bezierCurveTo(ctrlX1, ctrlY1, ctrlX2, ctrlY2, endX, endY);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Adjust canvas size on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
```

### 3. **How It Works**

- **Canvas Setup:** We set the canvas dimensions to match the window size.
- **Event Listeners:** 
  - `mousedown` starts the drawing process and records the starting point.
  - `mousemove` updates the end point and redraws the line.
  - `mouseup` stops the drawing process and clears the canvas.
- **Drawing Function:** 
  - Calculates the distance between the start and end points.
  - Computes control points for a cubic Bezier curve to simulate the rubber band effect.
  - Draws the line on the canvas using the `bezierCurveTo` method.
- **Clear Canvas:** Ensures only the current line is visible.

### 4. **Try It Out**

Save your HTML and JavaScript files. Open the HTML file in a browser, and you should see a line being drawn with a rubber band effect as you drag the mouse.

This basic example can be extended with additional features like color changes, different line styles, or animations for a more sophisticated effect.