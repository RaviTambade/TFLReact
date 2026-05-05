// src/components/Addcustomer.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerService from '../Services/CustomerService';
 
const CustomerCreate =() => {

  var navigator = useNavigate();
  const CustomerList =JSON.parse(CustomerService.getAll());
  let cust = {
    id: CustomerList.length +1,
    name: '',
    email: '',
    contactnumber: '',
    location:''
  };

  const[customer, setCustomer]= useState(cust);

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

          CustomerService.addCustomer(customer);
          navigator("/customers");
              
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
