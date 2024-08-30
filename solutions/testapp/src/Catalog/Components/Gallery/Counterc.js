import React, { Component } from 'react';

//Only through Class React component , you can handle React life cycle event handlers

class CounterC extends Component {   
  constructor(props) {
    console.log("Counter component constructor is called...");
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    console.log("Increment is getting called.");
  };

  shouldComponentUpdate() {
    console.log("Should component update is called.");
    return true;
  }


  render() {    
    console.log("Render is called....");
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }

 componentDidMount() {
    console.log("Component did Mount is called...")
}
 

  componentWillUnmount() {
    console.log("Releasing resource if allocated during lifecyle of counter component");
  }
}
export default CounterC;