const express = require('express');
const cors = require('cors'); // Optional for handling CORS

const app = express();
const port = 4000; // You can use any port you like

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Sample data
const posts = [
  { id: 1, title: 'Knowledge is not wisdom unless it’s reflected in one’s actions.', content: 'The measure of true education is not in certificates, but in skill set. You could collect knowledge but you need to put your efforts to earn the experience.' },
  { id: 2, title: 'Job Guarantee Course: A Delusion', content: 'A job guarantee course refers to a training program that promises participants about employment upon completion of the program.' },
  { id: 3, title: 'Are we on right Path?', content: 'So many candidates have appeared. So many degree holders are in queue. This is the reality of the current market. Is that demand and supply problem or candidates with Projet ready skill deficiency.' }
];

// Routes
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// Start the server
app.listen(port, () => {
 console.log("Bloggers Service hosted");
  console.log(`Server running at http://localhost:${port}`);
});


 