# React Hooks

- Allows you to use state and other React features without writing a class.
- Hooks are the functions which "hook into" React state and lifecycle features from function components.
- It does not work inside classes.

## When to use a Hooks

If you write a function component, and then you want to add some state to it, previously you do this by converting it to a class. But, now you can do it by using a Hook inside the existing function component.

## Rules of Hooks

Hooks are similar to JavaScript functions, but you need to follow these two rules when using them. Hooks rule ensures that all the stateful logic in a component is visible in its source code. These rules are:

1. Only call Hooks at the top level
   Do not call Hooks inside loops, conditions, or nested functions. Hooks should always be used at the top level of the React functions. This rule ensures that Hooks are called in the same order each time a components renders.

2. Only call Hooks from React functions
   You cannot call Hooks from regular JavaScript functions. Instead, you can call Hooks from React function components. Hooks can also be called from custom Hooks.

## Hooks State

- Hook state is the new way of declaring a state in React app.
- Hook uses `useState()` functional component for setting and retrieving state.

**With Hooks:**

```javascript
// CountApp.js
import React, { useState } from "react";

function CountApp() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default CountApp;
```

**Without Hooks:**

```javascript
// CountApp.js
import React, { useState, Component } from "react";

export default class CountApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <p>
          <b>You clicked {this.state.count} times</b>
        </p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

## Hooks Effect

- The Effect Hook allows us to perform side effects (an action) in the function components.
- It does not use components lifecycle methods which are available in class components.
- Effects Hooks are equivalent to `componentDidMount()`, `componentDidUpdate()`, and `componentWillUnmount()` lifecycle methods.

Side effects have common features which the most web applications need to perform, such as:

1. Updating the DOM,
2. Fetching and consuming data from a server API,
3. Setting up a subscription, etc.

```javascript
import React, { useState, useEffect } from "react";

export default function CounterExample() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

In React component, there are two types of side effects:

1. Effects Without Cleanup
   > It is used in useEffect which does not block the browser from updating the screen. It makes the app more responsive. The most common example of effects which don't require a cleanup are manual DOM mutations, Network requests, Logging, etc.
2. Effects With Cleanup
   > Some effects require cleanup after DOM updation. For example, if we want to set up a subscription to some external data source, it is important to clean up memory so that we don't introduce a memory leak. React performs the cleanup of memory when the component unmounts. However, as we know that, effects run for every render method and not just once. Therefore, React also cleans up effects from the previous render before running the effects next time.

## Custom Hooks

- A custom Hook is a JavaScript function.
- The name of custom Hook starts with "use" which can call other Hooks.
- A custom Hook is just like a regular function, and the word "use" in the beginning tells that this function follows the rules of Hooks.
- Building custom Hooks allows you to extract component logic into reusable functions.

```javascript
import React, { useState, useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

function CustomCounter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  useDocumentTitle(`You clicked ${count} times`);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={incrementCount}>Click me</button>
    </div>
  );
}

export default CustomCounter;
```

## Built-in Hooks

**Basic Hooks**

- useState
- useEffect
- useContext

**Additional Hooks**

- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue
