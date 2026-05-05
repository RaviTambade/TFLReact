
import { useParams } from "react-router-dom";
import CustomerService from "../Services/CustomerService";


const Details =()=>{
    const {customerId} = useParams();
     var customer =  CustomerService.getById(Number(customerId));
  
    return(
        <div>
            <h3> Customer Details </h3>
            <p>Name :{customer.name} </p>
            <p>Contact Number : {customer.contactnumber}  </p>
            <p>Email : {customer.email} </p>
            <p>Location : {customer.location} </p>
        </div>
    );
}

export default Details;