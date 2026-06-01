import React, { useState } from 'react';

const Register = () => {
 
    const [ user, setUser] = useState({
        name: 'ravi',
        email: 'ravi.tambade@transflower.in',
        contact: '1234567890',
        age:51,
        password: 'secret'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }

    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>    
                    <input type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
                </div>
                <div>
                    <label>Contact:</label>
                    <input type="text" value={user.contact} onChange={(e) => setUser({...user, contact: e.target.value})} />
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" value={user.age} onChange={(e) => setUser({...user, age: parseInt(e.target.value)})} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;