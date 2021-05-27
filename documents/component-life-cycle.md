# React Component Life-Cycle

- Every component creation process involves various lifecycle methods.

- These lifecycle methods are termed as component's lifecycle.

- These lifecycle methods are not very complicated and called at various points during a component's life.

**The lifecycle of the component is divided into four phases:**

1. Initial Phase
2. Mounting Phase
3. Updating Phase
4. Unmounting Phase

## Initial Phase

**getDefaultProps()**: It is used to specify the default value of this.props. It is invoked before the creation of the component or any props from the parent is passed into it.

**getInitialState()**: It is used to specify the default value of this.state. It is invoked before the creation of the component.

## Mounting Phase

**componentWillMount()**: This is invoked immediately before a component gets rendered into the DOM. In the case, when you call `setState()` inside this method, the component will not `re-render`.

**componentDidMount()**: This is invoked immediately after a component gets rendered and placed on the DOM. Now, you can do any DOM querying operations.

**render()**: This method is defined in each and every component. It is responsible for returning a single root `HTML node` element. If you don't want to render anything, you can return a `null` or `false` value.

## Updating Phase

**componentWillRecieveProps()**: It is invoked when a component receives new props. If you want to update the state in response to prop changes, you should compare this.props and nextProps to perform state transition by using `this.setState()` method.

**shouldComponentUpdate()**: It is invoked when a component decides any changes/updation to the DOM. It allows you to control the component's behavior of updating itself. If this method returns true, the component will update. Otherwise, the component will skip the updating.

**componentWillUpdate()**: It is invoked just before the component updating occurs. Here, you can't change the component state by invoking `this.setState()` method. It will not be called, if `shouldComponentUpdate()` returns false.

**render()**: It is invoked to examine `this.props` and `this.state` and return one of the following types: React elements, Arrays and fragments, Booleans or null, String and Number. If `shouldComponentUpdate()` returns false, the code inside `render()` will be invoked again to ensure that the component displays itself properly.

**componentDidUpdate()**: It is invoked immediately after the component updating occurs. In this method, you can put any code inside this which you want to execute once the updating occurs. This method is not invoked for the initial render.

## Unmounting Phase

**componentWillUnmount()**: This method is invoked immediately before a component is destroyed and unmounted permanently. It performs any necessary **cleanup** related task such as invalidating timers, event listener, canceling network requests, or cleaning up DOM elements. If a component instance is unmounted, you cannot mount it again.

## React Component Life-Cycle Example

```javascript
import React, { Component } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hello: "JavaTpoint" };
    this.changeState = this.changeState.bind(this);
  }

  render() {
    return (
      <div>
        <h1>ReactJS component's Lifecycle</h1>
        <h3>Hello {this.state.hello}</h3>
        <button onClick={this.changeState}>Click Here!</button>
      </div>
    );
  }

  componentWillMount() {
    console.log("Component Will MOUNT!");
  }

  componentDidMount() {
    console.log("Component Did MOUNT!");
  }

  changeState() {
    this.setState({ hello: "All!!- Its a great reactjs tutorial." });
  }

  componentWillReceiveProps(newProps) {
    console.log("Component Will Recieve Props!");
  }

  shouldComponentUpdate(newProps, newState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Component Will UPDATE!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did UPDATE!");
  }

  componentWillUnmount() {
    console.log("Component Will UNMOUNT!");
  }
}

export default App;
```
