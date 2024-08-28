// src/components/Login.js
import React, { Component } from 'react';

class Loginc extends Component {

  constructor(props) {
    super(props);
    this.state = { email: '',
                    password: '',
                    error: ''
                };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    // Simple validation
    if (email === '' || password === '') {
      this.setState({ error: 'Both fields are required' });
      return;
    }

    // You can replace this with actual authentication logic
    alert(`email: ${email}\nPassword: ${password}`);

    // Clear form after submission
    this.setState({ email: '',
                    password: '',
                    error: ''
    });
  };

  render() {
    const { email, password, error } = this.state;

    return (
      <div className="login">
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">email:</label>
            <input type="text" id="email" name="email" value={email} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={this.handleChange} />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Loginc;