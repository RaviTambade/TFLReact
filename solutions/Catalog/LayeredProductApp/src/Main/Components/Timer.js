import React from "react";
/*
class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.setState({ count: this.state.count + 1 }), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return <h1>Time: {this.state.count}</h1>;
    }
  }
*/



  import { useState, useEffect } from 'react';

    function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setCount(c => c + 1), 1000);
        return () => clearInterval(interval);
    }, []);

    return <h1>Time: {count}</h1>;
    }


  export default Timer;
