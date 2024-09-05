const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const users = []; 

const SECRET_KEY = 'your_secret_key'; 

// Register endpoint
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  users.push({ username, password: hashedPassword });
  res.status(201).send('User registered');
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);
  
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).send('Invalid credentials');
  }

  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

// Protected endpoint
app.get('/protected', (req, res) => {
  const token = req.headers['authorization'];
  
  if (!token) {
    return res.status(401).send('No token provided');
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send('Failed to authenticate token');
    }

    res.json({ message: 'This is a protected resource', user: decoded.username });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
