import React, { useState } from 'react';
import   './ControlledForm.css';

const  ControlledForm=()=> {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
   <form className="form-container" onSubmit={handleSubmit}>
  
  <div className="form-group">
    <label htmlFor="name">Name</label>
    <input 
      type="text" 
      id="name"
      name="name" 
      value={formData.name} 
      onChange={handleChange} 
      placeholder="Enter your name"
    />
  </div>

  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input 
      type="email" 
      id="email"
      name="email" 
      value={formData.email} 
      onChange={handleChange} 
      placeholder="Enter your email"
    />
  </div>

  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input 
      type="password" 
      id="password"
      name="password" 
      value={formData.password} 
      onChange={handleChange} 
      placeholder="Enter your password"
    />
  </div>

  <div className="form-group">
    <button type="submit">Submit</button>
  </div>

</form>
  );
}

export default ControlledForm;