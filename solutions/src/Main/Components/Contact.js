
import { useNavigate } from "react-router-dom";

//useState, useNavigate
function Contact() {

  const navigate=useNavigate();

  const handleClick=()=>{
     navigate('/about');
  }


  return (
    <div>
      <h2>Contact</h2>

      <button onClick={handleClick}>Go to Home</button>

    </div>
  );
}
export default Contact;