
import React, { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState('ravi.tambade@transflower.in');
    const [password, setPassword] = useState('secret');

     return (
        <div>   
            <h1>Login Page</h1>
            <p>Please enter your email and password to login.</p>
            <form >
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;