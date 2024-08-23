import React, { useState } from 'react';

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password:'',
    membership: ''  
  });

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      membership: '',
      password:''
    });
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>


        <div>
          <label>Membership Type:</label>
          <div>
            <label>
            <input type="radio" name="membership" value="Gold" checked={formData.membership === 'Gold'} onChange={handleChange}/>
            Gold
            </label>
            <label>
            <input type="radio" name="membership" value="Silver" checked={formData.membership === 'Silver'} onChange={handleChange}/>
             Silver
            </label>
            <label>
            <input type="radio" name="membership" value="Platinum" checked={formData.membership === 'Platinum'} onChange={handleChange} />
              Platinum
            </label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MembershipForm;
