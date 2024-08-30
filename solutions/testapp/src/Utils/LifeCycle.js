// src/App.js
import React, { Component } from 'react';

class LifeCycle extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log('Constructor: Component is being constructed');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps: Component is receiving new props');
    // This method can update state based on props changes, but we'll leave it unchanged
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount: Component has been mounted');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Component should decide if it needs to update');
    // Allow updates by returning true; in real cases, you might add conditions here
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: Snapshot of the DOM is captured before updates');
    // Return value will be passed to componentDidUpdate
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: Component has been updated');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to be unmounted');
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log('render: Component is rendering');

    
    return (
      <div>
        <h1>React Component Lifecycle</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment Count</button>
      </div>
    );
  }
}

export default LifeCycle;
