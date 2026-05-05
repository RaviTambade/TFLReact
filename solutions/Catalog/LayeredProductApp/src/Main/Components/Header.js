// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.brand}>
          <h1 style={styles.logo}>MyBrand</h1>
        </div>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="/" style={styles.navLink}>Home</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/about" style={styles.navLink}>About Us</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/products" style={styles.navLink}>Products</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/contact" style={styles.navLink}>Contact</Link>
            </li>
          </ul>
        </nav>
        <div style={styles.actions}>
          <a href="/login" style={styles.button}>Login</a>
          <a href="/signup" style={styles.button}>Sign Up</a>
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    borderBottom: '2px solid #0056b3'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  brand: {
    flex: '1'
  },
  logo: {
    margin: 0,
    fontSize: '24px',
    fontWeight: 'bold'
  },
  nav: {
    flex: '2'
  },
  navList: {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  navItem: {
    margin: '0 15px'
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px'
  },
  actions: {
    flex: '1',
    textAlign: 'right'
  },
  button: {
    marginLeft: '10px',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#0056b3',
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px'
  }
};

export default Header;
