# React Refs

- Refs is the shorthand used for references in React.
- It is similar to keys in React.
- It is an attribute which makes it possible to store a reference to particular DOM nodes or React elements.
- It provides a way to access React DOM nodes or React elements and how to interact with it.
- It is used when we want to change the value of a child component, without making the use of props.

## When to Use Refs

Refs can be used in the following cases:

- When we need DOM measurements such as managing focus, text selection, or media playback.
- It is used in triggering imperative animations.
- When integrating with third-party DOM libraries.
- It can also use as in callbacks.

## When to not use Refs

- Its use should be avoided for anything that can be done **declaratively**. For example, instead of using **open()** and **close()** methods on a Dialog component, you need to pass an **isOpen** prop to it.
- You should have to avoid overuse of the Refs.

## How to create Refs

- Refs can be created by using **React.createRef()**.
- It can be assigned to React elements via the **ref** attribute.

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.callRef = React.createRef();
  }

  render() {
    return <div ref={this.callRef} />;
  }
}
```

## How to access Refs

In React, when a ref is passed to an element inside render method, a reference to the node can be accessed via the current attribute of the ref.

```javascript
const node = this.callRef.current;
```

## Refs current Properties

The ref value differs depending on the type of the node:

- When the ref attribute is used in HTML element, the ref created with **React.createRef()** receives the underlying DOM element as its **current** property.
- If the ref attribute is used on a custom class component, then ref object receives the **mounted** instance of the component as its current property.
- The ref attribute cannot be used on **function components** because they don't have instances.

## Add Ref to DOM elements

```javascript
import React, { Component } from "react";
import { render } from "react-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.callRef = React.createRef();
    this.addingRefInput = this.addingRefInput.bind(this);
  }

  addingRefInput() {
    this.callRef.current.focus();
  }

  render() {
    return (
      <div>
        <h2>Adding Ref to DOM element</h2>
        <input type="text" ref={this.callRef} />
        <input
          type="button"
          value="Add text input"
          onClick={this.addingRefInput}
        />
      </div>
    );
  }
}
```

## Add Ref to Class components

```javascript
import React, { Component } from "react";

function CustomInput(props) {
  let callRefInput = React.createRef();

  function handleClick() {
    callRefInput.current.focus();
  }

  return (
    <div>
      <h2>Adding Ref to Class Component</h2>
      <input type="text" ref={callRefInput} />
      <input type="button" value="Focus input" onClick={handleClick} />
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.callRefInput = React.createRef();
  }

  focusRefInput() {
    this.callRefInput.current.focus();
  }

  render() {
    return <CustomInput ref={this.callRefInput} />;
  }
}
```

## Callback refs

```javascript
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.callRefInput = null;

    this.setInputRef = (element) => {
      this.callRefInput = element;
    };

    this.focusRefInput = () => {
      // Focus the input using the raw DOM API
      if (this.callRefInput) this.callRefInput.focus();
    };
  }

  componentDidMount() {
    // autofocus of the input on mount
    this.focusRefInput();
  }

  render() {
    return (
      <div>
        <h2>Callback Refs Example</h2>
        <input type="text" ref={this.setInputRef} />
        <input
          type="button"
          value="Focus input text"
          onClick={this.focusRefInput}
        />
      </div>
    );
  }
}
```

## Forwarding Ref from one component to another component

- Ref forwarding is a technique that is used for passing a **ref** through a component to one of its child components.
- It can be performed by making use of the **React.forwardRef()** method.
- This technique is particularly useful with **higher-order components** and specially used in reusable component libraries.

```javascript
import React, { Component } from "react";

const TextInput = React.forwardRef((props, ref) => (
  <input type="text" placeholder="Hello World" ref={ref} />
));

const inputRef = React.createRef();

export default class CustomTextInput extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <TextInput ref={inputRef} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
```

## React with useRef()

**Syntax**

```javascript
const refContainer = useRef(initialValue);
```

**Example**

```javascript
function useRefExample() {
  const inputRef = useRef(null);
  const onButtonClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={onButtonClick}>Submit</button>
    </>
  );
}
```
