import React from "react";

function Contact() {
  const name = 'Alice';
  const element = <h1>Hello, {name}!</h1>;
  const element2 = <input type="text" placeholder="Enter your name" />;

  const element3 = (
    <div>
      <h1>Hello, world!</h1>
      <p>This is a paragraph.</p>
    </div>
  );
  
  const numbers = [1, 2, 3];
  const listItems = numbers.map(number => <li key={number}>{number}</li>);

  const element4 = <ul>{listItems}</ul>;

  const isLoggedIn = false;
  const element5 = (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please sign in.</p>}
    </div>
  );


  const style = {
    color: 'blue',
    backgroundColor: 'lightgray'
  };
  
  const element6 = <div style={style}>Styled text</div>;

  
  //Fragments
  const element7 = (
    <>
      <h1>Title</h1>
      <p>Description</p>
    </>
  );
  //<> and </> are shorthand for <React.Fragment> and </React.Fragment>.
  


  const inputRef = React.createRef();

  function focusInput() {
    inputRef.current.focus();
  }

  const element8 = (
    <div>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );



    return (
    <div>

       {/* This is a comment */}

        <h2>Contact</h2>
        {element8}
        

    </div>
  );
}
export default Contact;

/*
JSX allows you to write HTML-like code in JavaScript.
Expressions are embedded using curly braces {}.
Attributes use camelCase.
Children can be nested elements.
Conditional rendering uses JavaScript expressions.
Inline styles use objects with camelCase property names.
Self-closing tags are used for elements without children.
Fragments let you group multiple elements without extra nodes.


*/