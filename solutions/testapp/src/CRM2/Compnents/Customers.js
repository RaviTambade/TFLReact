// src/components/customerList.js
import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import CustomerService from '../Services/CustomerService';

const Customers = () =>{
    const CustomerList =JSON.parse(CustomerService.getAll());
    var navigator = useNavigate();
  
    const handleDelete = (id) => {
    // Simulate deleting a customer
    console.log('Deleting customer with id:', id);
    CustomerService.remove(id);
    navigator("/customers");
    
};

    return (
        <div>
            <h1>Top Customers</h1>
            <Link to="/customers/add">Add New customer</Link>
            <ul>
                {CustomerList.map(customer => (
                    <li key={customer.id}>
                        <Link to={`/customers/${customer.id}`}>{customer.name}</Link>
                        {' | '}
                        <Link to={`/customers/edit/${customer.id}`}>Edit</Link>
                        {' | '}

                        <Link to={`/customers/remove/${customer.id}`}>Remove</Link>
                        {' | '}

                        <button onClick={() => handleDelete(customer.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            <Outlet/>
        </div>
    );
}
export default Customers;
