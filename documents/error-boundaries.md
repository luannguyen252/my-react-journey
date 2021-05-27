# React Error Boundaries

- Handle the errors by using the error boundaries.

- If any JavaScript error found in a part of the UI, it does not break the whole app.

- Error boundaries are React components which catch JavaScript errors anywhere in our app, log those errors, and display a fallback UI.

- It does not break the whole app component tree and only renders the fallback UI whenever an error occurred in a component.

- Error boundaries catch errors during rendering in component lifecycle methods, and constructors of the whole tree below them.

**Sometimes, it is not possible to catch Error boundaries in React application. These are:**

1. Event handlers
2. Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
3. Server-side rendering
4. Errors are thrown in the error boundary itself rather than its children.

## React Error Boundaries Example

```javascript
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  render() {
    if (this.state.counter === 3) {
      throw new Error("I crashed!");
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

function App() {
  return (
    <div>
      <p>
        <b>Example of Error Boundaries</b>
      </p>
      <hr />
      <ErrorBoundary>
        <p>These two counters are inside the same error boundary.</p>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <p>These two counters are inside of their individual error boundary.</p>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </div>
  );
}

export default App;
```

## Error Boundary in Event Handler

```javascript
import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    try {
      // Do something which can throw error
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    if (this.state.error) {
      return;
      <h2>It caught an error.</h2>;
    }
    return <div onClick={this.handleClick}>Click Me</div>;
  }
}
```
