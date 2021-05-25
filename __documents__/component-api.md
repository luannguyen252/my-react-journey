# React Component API

## setState()

> This method is used to update the state of the component. This method does not always replace the state immediately. Instead, it only adds changes to the original state. It is a primary method that is used to update the user interface(UI) in response to event handlers and server responses.

```javascript
this.stateState(object newState[, function callback]);
```

**setState() Example**

```javascript
import React, { Component } from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      msg: "Welcome to JavaTpoint",
    };

    this.updateSetState = this.updateSetState.bind(this);
  }

  updateSetState() {
    this.setState({
      msg: "Its a best ReactJS tutorial",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.updateSetState}>SET STATE</button>
      </div>
    );
  }
}

export default App;
```

## forceUpdate()

> This method allows us to update the component manually.

```javascript
Component.forceUpdate(callback);
```

**forceUpdate() Example**

```javascript
import React, { Component } from "react";

class App extends React.Component {
  constructor() {
    super();
    this.forceUpdateState = this.forceUpdateState.bind(this);
  }

  forceUpdateState() {
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <h1>Example to generate random number</h1>
        <h3>Random number: {Math.random()}</h3>
        <button onClick={this.forceUpdateState}>ForceUpdate</button>
      </div>
    );
  }
}

export default App;
```

## findDOMNode()

> For DOM manipulation, you need to use **ReactDOM.findDOMNode()** method. This method allows us to find or access the underlying DOM node.

```javascript
ReactDOM.findDOMNode(component);
```

**findDOMNode() Example**

```javascript
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.findDomNodeHandler1 = this.findDomNodeHandler1.bind(this);
    this.findDomNodeHandler2 = this.findDomNodeHandler2.bind(this);
  }

  findDomNodeHandler1() {
    var myDiv = document.getElementById("myDivOne");
    ReactDOM.findDOMNode(myDivOne).style.color = "red";
  }

  findDomNodeHandler2() {
    var myDiv = document.getElementById("myDivTwo");
    ReactDOM.findDOMNode(myDivTwo).style.color = "blue";
  }

  render() {
    return (
      <div>
        <h1>ReactJS Find DOM Node Example</h1>
        <button onClick={this.findDomNodeHandler1}>FIND_DOM_NODE1</button>
        <button onClick={this.findDomNodeHandler2}>FIND_DOM_NODE2</button>
        <h3 id="myDivOne">JTP-NODE1</h3>
        <h3 id="myDivTwo">JTP-NODE2</h3>
      </div>
    );
  }
}

export default App;
```
