var customers = [
    { id: 1, name: 'IBM', contactnumber:'9334856891', email:'savita.j@ibm.com',location:'USA'},
    { id: 2, name: 'Microsoft',contactnumber:'98823794', email:'savita.j@ibm.com',location:'USA' },
    { id: 3, name: 'Persistent',contactnumber:'9448283894', email:'shamala.nene@pspl.com',location:'India' },
    { id: 4, name: 'Infosys',contactnumber:'9881284795', email:'charulata@infy.com',location:'India' },
    { id: 5, name: 'Sony',contactnumber:'9884578459', email:'charan.patil@sony.com',location:'Japan' },
    { id: 6, name: 'Samsung',contactnumber:'974534592', email:'rajan.more@samsung.com',location:'South Koria' },
];

const CustomerService = {
    getAll(){
        if(localStorage.getItem("customers")===null) {  
            let strCustomers = JSON.stringify(customers);
            localStorage.setItem("customers",strCustomers);
         }

       return localStorage.getItem("customers");
    },

    getById(id){
        let storageCustomers = localStorage.getItem("customers");
        let customers = JSON.parse(storageCustomers);
        let customer = customers.find((cst)=>(cst.id === id));
        return customer; 
    },

    addCustomer(cust){
        let storageCustomers = localStorage.getItem("customers");
        let customers = JSON.parse(storageCustomers);
        customers.push(cust);
        let strCustomers = JSON.stringify(customers);
        localStorage.setItem("customers",strCustomers);
    },

    updateCustomer(cust){
        let storageCustomers = localStorage.getItem("customers");
        let customers = JSON.parse(storageCustomers);
        customers=customers.filter(customer=>customer.id !==cust.id);
        customers.push(cust);
        let strCustomers = JSON.stringify(customers);
        localStorage.setItem("customers",strCustomers);
    },

    remove(id){
        let storageCustomers = localStorage.getItem("customers");
        let customers = JSON.parse(storageCustomers);
        customers=customers.filter(customer=>customer.id !==id);
        let strCustomers = JSON.stringify(customers);
        localStorage.setItem("customers",strCustomers);
    } 

}

export default CustomerService;