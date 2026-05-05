
import { useParams,useNavigate } from "react-router-dom";
import CustomerService from "../Services/CustomerService";


const CustomerRemove =()=>{
    const navigator=useNavigate();
    const {customerId} = useParams();
     var customer =  CustomerService.getById(Number(customerId));

    const handleYes=()=>{
        console.log("yes");
        CustomerService.remove(customer.customerId);
        navigator("/customers");
    }

    const handleNo=()=>{
        console.log("no");
        CustomerService.remove(customer.customerId);
        navigator("/customers");
    }

    return(
        <div>
            <h3> Customer Details </h3>
            <p>Name :{customer.name} </p>
            <p>Contact Number : {customer.contactnumber}  </p>
            <p>Email : {customer.email} </p>
            <p>Location : {customer.location} </p>
             <h2>Are you sure to Remove ?</h2>
             <button onClick={handleYes}>Yes</button> <button  onClick={handleNo}>No</button>
        </div>

    );
}

export default CustomerRemove;