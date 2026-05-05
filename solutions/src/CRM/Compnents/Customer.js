
import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
const Customer = () => {
  
    const { id } = useParams();
    const navigate = useNavigate();
    const [customer, setcustomer] = useState({ name: '', location: '' });

    const customers = [
      { id: 1, name: 'IBM' ,location:'USA'},
      { id: 2, name: 'Microsoft',location:'USA' },
      { id: 3, name: 'Persistent',location:'India' },
      { id: 4, name: 'Infosys',location:'India' },
      { id: 5, name: 'Sony',location:'Japan' },
      { id: 6, name: 'Samsung',location:'South Koria' },
    ];

    useEffect(() => {
        const existingcustomer = customers.find(p => p.id === parseInt(id));
        if (existingcustomer) {
            setcustomer(existingcustomer);
        }
    }, [id]);

    return (
      <div>
        <h1>Customer Details</h1>
                <label>Name:{customer.name} </label>
                <br />
                <label>
                Location:{customer.location} </label>
                <br />
      </div>
    );
  };
  
  export default Customer;