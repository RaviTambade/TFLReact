import React from 'react';
import { useParams } from 'react-router-dom';

const VendorDetails = () => {
  const { vendorId } = useParams();

  return (
    <div>
      <h1>Vendor Detail Page</h1>
      <p>Displaying details for Vendor ID: {vendorId}</p>
    </div>
  );
};

export default VendorDetails;
