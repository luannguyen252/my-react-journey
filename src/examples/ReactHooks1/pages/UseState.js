import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);

  return (
    <div>
      <h1>useState</h1>
      <p>{count}</p>
      <button onClick={incrementCount}>+1</button>
      <button onClick={decrementCount}>-1</button>
    </div>
  );
}

export default UseState;
