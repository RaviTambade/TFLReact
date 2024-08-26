import React, { useRef } from 'react';

function UncontrolledForm() {
    
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', nameRef.current.value);
    console.log('Email:', emailRef.current.value);
    console.log('Password:', passwordRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:<input type="text" ref={nameRef} />
      </label>
      <br />
      <label>
        Email:<input type="email" ref={emailRef} />
      </label>
      <br />
      <label>
        Password: <input type="password" ref={passwordRef} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
