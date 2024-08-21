import React, { Component } from 'react';

type CounterProps = {
  header: string;
};

type CounterState = {
  value: number;
};

class Counter extends React.Component<CounterProps, CounterState> {

  state: CounterState = {
    value: 0,
  };

  render() {
    const { header } = this.props;
    const { value } = this.state;

    return (
      <div>
        <h1>{header}</h1>
        <p>{value}</p>
      </div>
    );
  }
}