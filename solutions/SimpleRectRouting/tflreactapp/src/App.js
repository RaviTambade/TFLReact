import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import List from './components/List';
import Details from './components/Details';
import Register from './components/Register';
import SalesDashboard from './components/SalesDashboard';
import { Routes, Route } from 'react-router-dom';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import Dashboard from './pages/dashboard';
 
import PieChart from './components/dashboards/piechart';
import LineChart from './components/dashboards/linechart';
import Barchart from './components/dashboards/barchart';

import India from './components/countries/india';
import US from './components/countries/us';
import UK from './components/countries/uk';


function App() {
  return (
    <div className="App">
       <a href="/">List</a>|<a href="/aboutus">About Us</a> | <a href="/contact">Contact</a> | <a href="/login">Login</a> | <a href="/register">Register</a> | <a href="/details">Details</a> | <a href="/dashboard">Dashboard</a>
       <hr />
       <Routes>
        <Route path="/" element={<List />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="/dashboard/piechart" element={<PieChart />}/>   
          <Route path="/dashboard/linechart" element={<LineChart />} />
          <Route path="/dashboard/barchart" element={<Barchart />} />
        </Route>
      </Routes>
      </div>
    );
  }
  export default App;
