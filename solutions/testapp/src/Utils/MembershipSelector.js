// src/MembershipSelector.js
import React, { useState } from 'react';

const MembershipSelector = () => {
  // State to keep track of selected membership type
  const [selectedMembership, setSelectedMembership] = useState('');

  // Handle change events for radio buttons
  const handleRadioChange = (event) => {
    setSelectedMembership(event.target.value);
  };

  return (
    <div>
      <h2>Select Membership Type</h2>
      <form>
        <div style={{ marginBottom: '8px' }}>
          <label>
            <input
              type="radio" name="membership" value="silver"
              checked={selectedMembership === 'silver'}
              onChange={handleRadioChange}
            />Silver
          </label>
        </div>
        <div style={{ marginBottom: '8px' }}>
          <label>
            <input type="radio" name="membership" value="gold"
              checked={selectedMembership === 'gold'}
              onChange={handleRadioChange}
            />Gold
          </label>
        </div>
        <div style={{ marginBottom: '8px' }}>
          <label>
            <input type="radio" name="membership" value="platinum"
              checked={selectedMembership === 'platinum'}
              onChange={handleRadioChange}
            />
            Platinum
          </label>
        </div>
      </form>
      <div>
        <h3>Selected Membership:</h3>
        <p>{selectedMembership ? selectedMembership.charAt(0).toUpperCase() + selectedMembership.slice(1) : 'None'}</p>
      </div>
    </div>
  );
};

export default MembershipSelector;
