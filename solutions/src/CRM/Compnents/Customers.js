// src/components/customerList.js
import React from 'react';
import { Link } from 'react-router-dom';

const customers = [
    { id: 1, name: 'IBM' },
    { id: 2, name: 'Microsoft' },
    { id: 3, name: 'Persistent' },
    { id: 1, name: 'Infosys' },
    { id: 2, name: 'Sony' },
    { id: 3, name: 'Samsung' },
];

function Customers() {
    return (
        <div>
            <h1>Top Customers</h1>
            <Link to="/customers/add">Add New customer</Link>
            <ul>
                {customers.map(customer => (
                    <li key={customer.id}>
                        <Link to={`/customers/${customer.id}`}>{customer.name}</Link>
                        {' | '}
                        <Link to={`/customers/edit/${customer.id}`}>Edit</Link>
                        {' | '}
                        <button onClick={() => handleDelete(customer.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const handleDelete = (id) => {
    // Simulate deleting a customer
    console.log('Deleting customer with id:', id);
};

export default Customers;
