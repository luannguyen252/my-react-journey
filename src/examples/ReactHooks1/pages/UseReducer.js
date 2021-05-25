import React, { useReducer } from "react";

function UseReducer() {
  const [sum, dispatch] = useReducer((state, action) => {
    return state + action;
  }, 0);

  return (
    <div>
      <h1>useReducer</h1>
      <p>{sum}</p>
      <button onClick={() => dispatch(1)}>Add 1</button>
    </div>
  );
}

export default UseReducer;
