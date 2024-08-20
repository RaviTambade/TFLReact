function Login() {
    return (
      <div>
        <h2>Login</h2>
                <label for="fname">First name:</label> 
                <input type="text" id="fname" name="fname" value="John"/>  <br/>
                <label for="lname">Last name:</label> 
                <input type="text" id="lname" name="lname" value="Doe"/> <br/>
                <input type="submit" value="Submit"/>
        </div>
    );
  }
export default Login;
  