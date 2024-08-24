// src/AddressForm.js
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Define the schema for validation
const schema = yup.object().shape({
  shippingAddress: yup.string().required('Shipping address is required'),
  billingAddress: yup.string().required('Billing address is required'),
});

const AddressForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Address Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="shippingAddress">Shipping Address</label>
          <Controller name="shippingAddress" control={control} defaultValue=""
            render={({ field }) => (
              <input {...field} placeholder="Enter shipping address"
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}/>
            )}/>
          {errors.shippingAddress && <p style={{ color: 'red' }}>{errors.shippingAddress.message}</p>}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="billingAddress">Billing Address</label>
          <Controller name="billingAddress" control={control} defaultValue=""
            render={({ field }) => (
              <input {...field} placeholder="Enter billing address"
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}/>
            )}
          />
          {errors.billingAddress && <p style={{ color: 'red' }}>{errors.billingAddress.message}</p>}
        </div>

        <button type="submit" style={{ padding: '10px 20px', border: 'none', borderRadius: '4px', backgroundColor: '#007bff', color: 'white' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddressForm;


/*
react-hook-form handles form state and validation.
yup provides a schema for validating the form fields.
@hookform/resolvers integrates yup with react-hook-form.

*/

