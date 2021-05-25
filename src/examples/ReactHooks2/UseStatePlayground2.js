import React, { useState } from "react";

export default function UseStatePlayground2() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <buttun onClick={() => setCount(count - 1)}>-</buttun>
      <buttun onClick={() => setCount(count + 1)}>+</buttun>
    </div>
  );
}
