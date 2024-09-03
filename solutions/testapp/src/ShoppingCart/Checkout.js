import React, { useState } from 'react';

const Checkout = () => {
  
  // State to manage form data
  const [billing, setBilling] = useState({ name: '', email: '', address: '' });
  const [shipping, setShipping] = useState({ name: '', address: '' });
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [orderSummary] = useState({
    items: [
            { name: 'Gerbera', price: 20 },
            { name: 'Lotus', price: 35 }
    ],
    subtotal: 55,
    tax: 5.5,
    total: 60.5
  });

  const handleInputChange = (event, section) => {
    const { name, value } = event.target;
    if (section === 'billing') {
      setBilling({ ...billing, [name]: value });
    } else if (section === 'shipping') {
      setShipping({ ...shipping, [name]: value });
    }
  };

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log('Form submitted', { billing, shipping, paymentMethod });
  };

  return (
    <div style={styles.container}>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.section}>
          <h2>Billing Information</h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={billing.name}
            onChange={(e) => handleInputChange(e, 'billing')}
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={billing.email}
            onChange={(e) => handleInputChange(e, 'billing')}
            style={styles.input}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={billing.address}
            onChange={(e) => handleInputChange(e, 'billing')}
            style={styles.input}
          />
        </div>

        <div style={styles.section}>
          <h2>Shipping Information</h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={shipping.name}
            onChange={(e) => handleInputChange(e, 'shipping')}
            style={styles.input}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={shipping.address}
            onChange={(e) => handleInputChange(e, 'shipping')}
            style={styles.input}
          />
        </div>

        <div style={styles.section}>
          <h2>Payment Method</h2>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="creditCard"
              checked={paymentMethod === 'creditCard'}
              onChange={handlePaymentChange}
            />
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={handlePaymentChange}
            />
            PayPal
          </label>
        </div>

        <div style={styles.section}>
          <h2>Order Summary</h2>
          <ul style={styles.orderSummary}>
            {orderSummary.items.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price.toFixed(2)}
              </li>
            ))}
            <li>Subtotal: ₹{orderSummary.subtotal.toFixed(2)}</li>
            <li>Tax: ₹{orderSummary.tax.toFixed(2)}</li>
            <li>Total: ₹{orderSummary.total.toFixed(2)}</li>
          </ul>
        </div>

        <button type="submit" style={styles.button}>Place Order</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  section: {
    marginBottom: '20px'
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  orderSummary: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer'
  }
};

export default Checkout;
