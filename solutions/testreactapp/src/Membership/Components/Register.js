import { useState } from "react";


function Register() {

const [member,setMember]=useState({
  fullname:'Ojas Sharma',
  location:'Pune',
  email:'ojas.sharma@gmail.com',
  password:''
});

const handleChange=(e)=>{
  console.log("Change happened......"+ e.target);
  const {name , value}=e.target;
  setMember((preMember)=>({
                            ...preMember,  [name]:value
  }));
}

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log("form data submitted")
  console.log(member);
  // send this data to rest api

}

  return (
    <div>
      <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <table>
            <tr>
              <td>Full Name</td>
              <td><input type="text" id="fullname" name="fullname" value={member.fullname}  onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Location</td>
              <td><input type="text" id="location" name="location" value={member.location}  onChange={handleChange}  /></td>
            </tr>

            <tr>
              <td>Email</td>
              <td><input type="email" id="email" name="email" value={member.email}  onChange={handleChange} /></td>
            </tr>

            <tr>
              <td>Password</td>
              <td><input type="password" id="password" name="password" value={member.password}  onChange={handleChange} /></td>
            </tr>

            <tr>
              <td> </td>
              <td><button type="submit">Register</button></td>
            </tr>
          </table>
        </form>
    </div>
  );
}

export default Register;
