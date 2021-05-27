# React Constructor

- The constructor is a method used to initialize an object's state in a class. It automatically called during the creation of an object in a class.

- The constructor in a React component is called before the component is mounted.

- When you implement the constructor for a React component, you need to call super(props) method before any other statement.

- If you do not call super(props) method, this.props will be undefined in the constructor and can lead to bugs.

```javascript
constructor(props){
    super(props);
}
```

Constructors are mainly used for two purposes:

1. It used for initializing the local state of the component by assigning an object to `this.state`.

2. It used for binding event handler methods that occur in your component.

## React Constructor Example

```javascript
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "www.javatpoint.com",
    };

    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="App">
        <h2>React Constructor Example</h2>
        <input type="text" value={this.state.data} />
        <button onClick={this.handleEvent}>Please Click</button>
      </div>
    );
  }
}

export default App;
```

**The most common question related to the constructor are:**

1. Is it necessary to have a constructor in every component?

No, it is not necessary to have a constructor in every component. If the component is not complex, it simply returns a node.

```javascript
class App extends Component {
  render() {
    return <p> Name: {this.props.name}</p>;
  }
}
```

2. Is it necessary to call super() inside a constructor?

Yes, it is necessary to call super() inside a constructor. If you need to set a property or access 'this' inside the constructor in your component, you need to call super().

```javascript
class App extends Component {
  constructor(props) {
    this.fName = "Jhon"; // 'this' is not allowed before super()
  }

  render() {
    return <p> Name: {this.props.name}</p>;
  }
}
```

## Arrow Functions

```javascript
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "www.javatpoint.com",
    };
  }

  handleEvent = () => {
    console.log(this.props);
  };

  render() {
    return (
      <div className="App">
        <h2>React Constructor Example</h2>
        <input type="text" value={this.state.data} />
        <button onClick={this.handleEvent}>Please Click</button>
      </div>
    );
  }
}

export default App;
```

**Use a constructor in the following ways:**

1. The constructor is used to initialize state.

```javascript
class App extends Component {
  constructor(props) {
    // Here, it is setting initial value for 'inputTextValue'
    this.state = {
      inputTextValue: "initial value",
    };
  }
}
```

2. Using `this` inside constructor

```javascript
class App extends Component {
  constructor(props) {
    // When you use 'this' in constructor, super() needs to be called first
    super();
    // It means, when you want to use 'this.props' in constructor, call it as below
    super(props);
  }
}
```

3. Initializing third-party libraries

```javascript
class App extends Component {
  constructor(props) {
    this.myBook = new MyBookLibrary();
    // Here, you can access props without using 'this'
    this.Book2 = new MyBookLibrary(props.environment);
  }
}
```

4. Binding some context(this) when you need a class method to be passed in props to children.

```javascript
class App extends Component {
  constructor(props) {
    // When you need to 'bind' context to a function
    this.handleFunction = this.handleFunction.bind(this);
  }
}
```
