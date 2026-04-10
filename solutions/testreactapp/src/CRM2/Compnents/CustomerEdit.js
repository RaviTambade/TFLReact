import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import CustomerService from "../Services/CustomerService";

const EditCustomer = () =>{
    var navigator = useNavigate();
    const {customerId} = useParams();

    const [customer, setCustomer] = useState(CustomerService.getById(Number(customerId)));

    const handleChange = (e)=>{
        const {name, value}= e.target;
        setCustomer(prvCustomer => ({
            ...prvCustomer,
            [name]:value
        }));
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        CustomerService.updateCustomer(customer);
        navigator("/customers");
    };
    return(
        <div>
            <h3>Update Customer</h3>
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

        <button type="submit">Update</button>
      </form>

        </div>
    )
}

export default EditCustomer;