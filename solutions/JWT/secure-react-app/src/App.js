import React, { useState } from 'react';
import axios from 'axios';
import Soc from './Soc';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      setToken(response.data.token);
      setMessage('');
    } catch (error) {
      setMessage('Login failed');
    }
  };

  const fetchProtectedResource = async () => {
    try {
      const response = await axios.get('http://localhost:5000/protected', {
        headers: { Authorization: token },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Failed to fetch protected resource');
    }
  };

  return (
    <div className="App">
       <h1>Secure Access JWT</h1>
          <div>
        <table>
          <tr>
            <td>User Name</td>
            <td><input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td> <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </td>
          </tr>
          <tr>
            <td></td>
            <td><button onClick={handleLogin}>Login</button></td>
          </tr>
        </table>
                
      </div>
      <div>
        <button onClick={fetchProtectedResource} disabled={!token}>
          Fetch Confidential Data
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;