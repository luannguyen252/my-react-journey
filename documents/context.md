# React Context

> Context allows passing data through the component tree without passing props down manually at every level.

- We passed data in a top-down approach via props. Sometimes it is inconvenient for certain types of props that are required by many components in the React application.

- Context provides a way to pass values between components without explicitly passing a prop through every level of the component tree.

## How to use Context

1. Setup a context provider and define the data which you want to store.

2. Use a context consumer whenever you need the data from the store

## When to use Context

Context is used to share data which can be considered "global" for React components tree and use that data where needed, such as the current authenticated user, theme, etc.

```javascript
class App extends Component {
  render() {
    return <Toolbar theme="dark" />;
  }
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

class ThemedButton extends Component {
  render() {
    return <Button theme={this.props.theme} />;
  }
}
```

We can avoid passing props for every component through intermediate elements. Context passes a value into the component tree without explicitly threading it through every single component.

```javascript
// Create a context for the current theme which is "light" as the default.
const ThemeContext = React.createContext("light");

class App extends Component {
  render() {
    /* Use a ContextProvider to pass the current theme, which allows every component to read it, no matter how deep it is. Here, we are passing the "dark" theme as the current value.*/
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// Now, it is not required to pass the theme down explicitly for every component.
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends Component {
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}
```

## React Context API

> The React Context API is a component structure, which allows us to share data across all levels of the application. The main aim of Context API is to solve the problem of prop drilling (also called "Threading").

1. React.createContext
2. Context.provider
3. Context.Consumer
4. Class.contextType

### React.createContext

It creates a context object. When React renders a component which subscribes to this context object, then it will read the current context value from the matching provider in the component tree.

```javascript
const MyContext = React.createContext(defaultValue);
```

When a component does not have a matching Provider in the component tree, it returns the defaultValue argument. It is very helpful for testing components isolation (separately) without wrapping them.

### Context.Provider

Every Context object has a Provider React component which allows consuming components to subscribe to context changes. It acts as a delivery service. When a consumer component asks for something, it finds it in the context and provides it to where it is needed.

```javascript
<MyContext.Provider value={/* some value */}>
```

It accepts the value prop and passes to consuming components which are descendants of this Provider. We can connect one Provider with many consumers. Context Providers can be nested to override values deeper within the component tree. All consumers that are descendants of a Provider always re-render whenever the Provider's value prop is changed. The changes are determined by comparing the old and new values using the same algorithm as **Object.is** algorithm.

### Context.Consumer

It is the React component which subscribes to the context changes. It allows us to subscribe to the context within the function component. It requires the function as a component. A consumer is used to request data through the provider and manipulate the central data store when the provider allows it.

```javascript
<MyContext.Consumer>
    {value => /* render something which is based on the context value */}
</MyContext.Consumer>
```

The function component receives the current context value and then returns a React node. The value argument which passed to the function will be equal to the value prop of the closest Provider for this context in the component tree. If there is no Provider for this context, the value argument will be equal to the defaultValue which was passed to **createContext()**.

### Class.contextType

The contextType property on a class used to assign a Context object which is created by **React.createContext()**. It allows you to consume the closest current value of that Context type using **this.context**. We can reference this in any of the component life-cycle methods, including the render function.

## React Context API Example

```javascript
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BtnColorContext = React.createContext("btn btn-darkyellow");

function Button(props) {
  return (
    <div className="container">
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends Component {
  static contextType = BtnColorContext;
  render() {
    return <button className={this.context}>welcome to javatpoint</button>;
  }
}

export default class App extends Component {
  render() {
    return (
      <BtnColorContext.Provider value="btn btn-info">
        <Button />
      </BtnColorContext.Provider>
    );
  }
}
```
