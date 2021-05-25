import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, increment, decrement, reset } = this.props;

    return (
      <div>
        <h2>{counter}</h2>
        <div>
          <button onClick={increment}>INCREMENT BY 1</button>
          <button onClick={decrement}>DECREMENT BY 1</button>
          <button onClick={reset}>RESET</button>
        </div>
      </div>
    );
  }
}

export default Counter;
