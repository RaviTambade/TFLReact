const express = require('express');
const cors = require('cors'); // Optional for handling CORS

const app = express();
const port = 7000; // You can use any port you like

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Sample data
const users = [
  { id: 1, name: 'Abhay Navale', email: 'abhay.navale@gmail.com' },
  { id: 2, name: 'Shubham Teli', email: 'shubham.teli@gmail.com' },
  { id: 3, name: 'Rutuja Tambade', email: 'rutuja.tambade@gmail.com' },
  { id: 4, name: 'Disha Satpute', email: 'disha.satpute@gmail.com' },
  { id: 5, name: 'Tejas Pawale', email: 'tejas.pawale@gmail.com' },
  { id: 6, name: 'Pragati Bangar', email: 'pragati.bangar@gmail.com' },
  { id: 7, name: 'Sanika Bhor', email: 'sanika.bhor@gmail.com' }
];

// Routes
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Start the server
app.listen(port, () => {
 console.log("Users Service hosted");
  console.log(`Server running at http://localhost:${port}`);
});
