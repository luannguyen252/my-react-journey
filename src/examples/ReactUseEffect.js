import React, { useState, useEffect } from "react";

// BEGIN: React Use Effect 1
export default function ReactUseEffect1() {
  const [count, setCount] = useState(0);
  const color = count % 5 === 0 ? "red" : "blue";

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      Click HERE to increment: {count}
    </button>
  );
}
// END: React Use Effect 1

// BEGIN: React Use Effect 2
function randomColor() {
  return `#${Math.random().toString(16).substr(-6)}`;
}

export default function ReactUseEffect2() {
  const [count, setCount] = useState(0);

  // BEGIN: Sử dụng useEffect như là Lifecycle
  useEffect(() => {
    document.body.style.backgroundColor = randomColor();
  });
  // END: Sử dụng useEffect như là Lifecycle

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      Click HERE to increment: {count}
    </button>
  );
}
// END: React Use Effect 2

function Greet({ name }) {
  const message = `Hello, ${name}!`; // Calculates output

  useEffect(() => {
    // Runs once, after mounting
    document.title = "Greetings Page"; // Side-effect!
  }, []); // useEffect(callback[, dependencies]);

  return <div>{message}</div>; // Calculates output
}

/**
 * callback is the callback function containing side-effect logic. useEffect() executes the callback function after React has committed the changes to the screen.
 * dependencies is an optional array of dependencies. useEffect() executes callback only if the dependencies have changed between renderings.
 */

// The side-effect on component did update
function MyComponent({ prop }) {
  const [state, setState] = useState();

  useEffect(() => {
    // Side-effect uses `prop` and `state`
  }, [prop, state]);

  return <div>....</div>;
}

function Greet({ name }) {
  const message = `Hello, ${name}!`;

  useEffect(() => {
    document.title = `Greetings to ${name}`;
  }, [name]);

  return <div>{message}</div>;
}

export default function App() {
  return <ReactUseEffect1 />;
}
