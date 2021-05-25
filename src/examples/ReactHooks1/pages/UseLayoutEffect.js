import React, { useState, useLayoutEffect } from "react";

function UseLayoutEffect() {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  console.log("Render", value);

  return (
    <div>
      <h1>useLayoutEffect</h1>
      <button onClick={() => setValue(0)}>Value: {value}</button>
    </div>
  );
}

export default UseLayoutEffect;
