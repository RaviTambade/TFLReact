// src/routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Main/Components/Home';
import About from '../Main/Components/About';
import Contact from '../Main/Components/Contact';
import Tap from '../Main/Components/Tap';

import Login from '../Membership/Components/Login';
import Register from '../Membership/Components/Register';

import Details from '../Catalog/Components/Details';
import ProductList from '../Catalog/Components/ProductList';

import Dashboard from '../BI/Components/Dashboard';
import LineChart from '../BI/Components/Charts/LineChart';

import BarChart from '../BI/Components/Charts/BarChart';
import PieChart from '../BI/Components/Charts/PieChart';

const AppRoutes = () => (
  <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="tap" element={<Tap />} />
          <Route path="products" element={<ProductList />}/>
          <Route path="products/:productId" element={<Details />} />
          <Route path="dashboard" element={<Dashboard />}>
                 {/* Nested Routing   */}
                   <Route path="line" element={<LineChart/>}></Route>
                  <Route path="bar" element={<BarChart/>}></Route>
                  <Route path="pie" element={<PieChart/>}></Route>
          </Route>
  </Routes>
);

export default AppRoutes;
