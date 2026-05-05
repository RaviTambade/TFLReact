import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const customers = [
    { id: 1, name: 'IBM', contactnumber:'9334856891', email:'savita.j@ibm.com',location:'USA'},
    { id: 2, name: 'Microsoft',contactnumber:'98823794', email:'savita.j@ibm.com',location:'USA' },
    { id: 3, name: 'Persistent',contactnumber:'9448283894', email:'shamala.nene@pspl.com',location:'India' },
    { id: 4, name: 'Infosys',contactnumber:'9881284795', email:'charulata@infy.com',location:'India' },
    { id: 5, name: 'Sony',contactnumber:'9884578459', email:'charan.patil@sony.com',location:'Japan' },
    { id: 6, name: 'Samsung',contactnumber:'974534592', email:'rajan.more@samsung.com',location:'South Koria' },
];

function CustomerEdit() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [customer, setcustomer] = useState({ name: '', location: '' });

    useEffect(() => {
        const existingcustomer = customers.find(p => p.id === parseInt(id));
        if (existingcustomer) {
            setcustomer(existingcustomer);
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updating customer:', { id, ...customer });
        navigate('/customers');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setcustomer((prev) => ({ ...prev, [name]: value }));
        console.log(e);
    };

    return (
        <div>
            <h1>Edit customer</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:
                <input type="text" name="name" value={customer.name}  onChange={handleChange} required />
                </label>
                <br />
                <label>
                    contact Number:
                    <input name="contactnumber" value={customer.contactnumber} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input name="email" value={customer.email} onChange={handleChange} required />
                </label>
                <label>
                    Location:
                    <input name="location" value={customer.location} onChange={handleChange} required />
                </label>

                <br />
                <button type="submit">Update customer</button>
            </form>
        </div>
    );
}

export default CustomerEdit;