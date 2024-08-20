import logo from './logo.svg';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import Tap from './Tap';
import { BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div>

    <div class="container-fluid p-5 bg-primary text-white text-center">
      <h1>Transflower</h1>
      <p>A learning experience!</p> 
    </div>
      
    <div class="container mt-5">
      <Router>
        <nav>
          <Link to="/">Home</Link> |<Link to="/about">About</Link> |<Link to="/contact">Contact</Link>|<Link to="/login">Login</Link> |<Link to="/register">Register</Link> |<Link to="/tap">Tap</Link>
        </nav>
        <hr/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="tap" element={<Tap />} />
        </Routes>
       
      </Router>
    </div>
</div>
  );
}

export default App;
