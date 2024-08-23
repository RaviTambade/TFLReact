//Lambda expression
//Arrow function
//Anonymous function
//varible storing address of unnamed function 
//( constfunction pointer)

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // If you're using react-router for navigation
 

const Login=()=> {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const history = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          // Replace with your login endpoint
          const response = await fetch('http://localhost:5124/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
          });

          if (!response.ok) {
              throw new Error('Login failed');
          }

          const data = await response.json();
          localStorage.setItem('jwtToken', data.token); // Save the JWT token
          history.push('/dashboard'); // Redirect after successful login
      } catch (error) {
          setError(error.message);
      }
  };


    return (
      <div>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
            </div>
            <div>
                <label>Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
            </div>
            <button type="submit">Login</button>
            {error && <p>Error: {error}</p>}
        </form>
        </div>
    );
  }
export default Login;
  

/*
    <h2>Login</h2>
    <label for="fname">First name:</label> 
    <input type="text" id="fname" name="fname" value="John"/>  <br/>
    <label for="lname">Last name:</label> 
    <input type="text" id="lname" name="lname" value="Doe"/> <br/>
    <input type="submit" value="Submit"/>


*/