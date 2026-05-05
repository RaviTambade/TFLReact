// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h4>About Us</h4>
          <p>
            We are a leading provider of high-quality products and services. Our mission is to deliver exceptional value to our customers through innovation and excellence.
          </p>
        </div>

        <div style={styles.section}>
          <h4>Legal</h4>
          <ul style={styles.list}>
            <li><a href="/terms-of-service" style={styles.link}>Terms of Service</a></li>
            <li><a href="/privacy-policy" style={styles.link}>Privacy Policy</a></li>
          </ul>
        </div>

        <div style={styles.section}>
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:support@example.com" style={styles.link}>support@example.com</a></p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>

        <div style={styles.section}>
          <h4>Follow Us</h4>
          <div style={styles.socialMedia}>
            <a href="https://facebook.com" style={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <img src="https://via.placeholder.com/24?text=F" alt="Facebook" style={styles.socialIcon} />
            </a>
            <a href="https://twitter.com" style={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <img src="https://via.placeholder.com/24?text=T" alt="Twitter" style={styles.socialIcon} />
            </a>
            <a href="https://instagram.com" style={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <img src="https://via.placeholder.com/24?text=I" alt="Instagram" style={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>
      <div style={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderTop: '1px solid #e9ecef',
    fontSize: '14px',
    color: '#212529'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  section: {
    flex: '1 1 200px',
    margin: '10px'
  },
  list: {
    listStyle: 'none',
    padding: 0
  },
  link: {
    color: '#007bff',
    textDecoration: 'none'
  },
  socialMedia: {
    display: 'flex',
    gap: '10px'
  },
  socialLink: {
    display: 'inline-block'
  },
  socialIcon: {
    width: '24px',
    height: '24px'
  },
  footerBottom: {
    textAlign: 'center',
    marginTop: '20px'
  }
};

export default Footer;
