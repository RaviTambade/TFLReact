// src/components/Addcustomer.js
import React, { useState } from 'react';
 
function CustomerCreate() {

    const [customer, setCustomer] = useState( { 
            name: 'Ravi Tambade',
            email:'ravi.tambade@transflower.in',
            location:'India',
            contactnumber:'9881735801'
    });


    // Handler for input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer(prevCustomer => ({
            ...prevCustomer,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
           e.preventDefault();
            // In a real application, you would typically send this data to a server here
            console.log('Customer submitted:', customer);
            // Clear the form after submission
            setCustomer({
            name: '',
            email: '',
            contactnumber: '',
            location:''
            });  
    };

    //

    return (
        <div>
      <h2>Insert New Customer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Customer Name:</label>
          <input type="text" id="name" name="name" value={customer.name} onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input id="locatoin" name="location"  value={customer.location} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="contatnumber">Contact Number:</label>
          <input id="contactnumber" name="contactnumber"  value={customer.contactnumber} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email"  value={customer.email} onChange={handleChange} required />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
       
    );
}

export default CustomerCreate;
