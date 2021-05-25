# React Higher-Order Components

- HOC (Higher-Order Components) is an advanced technique for reusing component logic.
- It is a function that takes a component and returns a new component.
- A higher order component function accepts another function as an argument.

**Syntax:**

```javascript
const NewComponent = higherOrderComponent(WrappedComponent);
```

**Working of HOCs:**

```javascript
// Function Creation
function add(a, b) {
  return a + b;
}

function higherOrder(a, addReference) {
  return addReference(a, 20);
}

// Function call
higherOrder(30, add); // 50
```

## React Higher-Order Components Example

```javascript
// HOCExample.js
import React, { Component } from "react";

function HOCExample(HocComponent) {
  return class extends Component {
    render() {
      return (
        <div>
          <HocComponent></HocComponent>
        </div>
      );
    }
  };
}

export default HOCExample;

// App.js
import React, { Component } from "react";
import HOCExample from "./HOCExample";

class App extends Component {
  render() {
    return (
      <div>
        <h2>HOC Example</h2>
        <p>HOC is an advanced technique for reusing component logic.</p>
      </div>
    );
  }
}

App = HOCExample(App);

export default App;
```

## Higher-Order Component Conventions

1. Do not use HOCs inside the render method of a component.
2. The static methods must be copied over to have access to them. You can do this using hoist-non-react-statics package to automatically copy all non-React static methods.
3. HOCs does not work for refs as 'Refs' does not pass through as a parameter or argument. If you add a ref to an element in the HOC component, the ref refers to an instance of the outermost container component, not the wrapped component.
