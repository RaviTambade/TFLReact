// src/config.js

const dev = {
    API_URL: 'http://localhost:5000/users/getall',
    OTHER_CONFIG: 'productionValue',
    REACT_APP_API_KEY:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYmYiOjE3MjU0OTcxOTgsImV4cCI6MTcyNjEwMTk5OCwiaWF0IjoxNzI1NDk3MTk4fQ.mhADkOG140_nDVq_y2m5f3tEeQ2ms6pTuGZEieBUg4Y'
  };
  
  const prod = {
    API_URL: 'https://api.example.com/users/getall',
    OTHER_CONFIG: 'productionValue',
    REACT_APP_API_KEY:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYmYiOjE3MjU0OTcxOTgsImV4cCI6MTcyNjEwMTk5OCwiaWF0IjoxNzI1NDk3MTk4fQ.mhADkOG140_nDVq_y2m5f3tEeQ2ms6pTuGZEieBUg4Y'
  };
  
  const test = {
    API_URL: 'http://localhost:5000/users/getall',
    OTHER_CONFIG: 'testValue',
    REACT_APP_API_KEY:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYmYiOjE3MjU0OTcxOTgsImV4cCI6MTcyNjEwMTk5OCwiaWF0IjoxNzI1NDk3MTk4fQ.mhADkOG140_nDVq_y2m5f3tEeQ2ms6pTuGZEieBUg4Y'
  };
  
  const config = process.env.NODE_ENV === 'production'
    ? prod
    : process.env.NODE_ENV === 'test'
    ? test
    : dev;
  
  export default config;
  