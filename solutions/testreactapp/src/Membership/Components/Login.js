
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
            <div className="form-container">
  <form onSubmit={handleSubmit}>

    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input 
        type="email" 
        id="email"
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
        placeholder="Enter your email"
      />
    </div>

    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input 
        type="password" 
        id="password"
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required 
        placeholder="Enter your password"
      />
    </div>

    {error && (
      <div className="form-error">
        Error: {error}
      </div>
    )}

    <div className="form-group">
      <button type="submit">Login</button>
    </div>

  </form>
</div>
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