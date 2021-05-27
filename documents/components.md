# React Components

Mainly two types of components:

1. Functional Components
2. Class Components

## Functional Components

```javascript
function WelcomeMessage(props) {
  return <h1>Welcome to the , {props.name}</h1>;
}
```

```javascript
import React, { Component } from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <First />
        <Second />
      </div>
    );
  }
}

class First extends React.Component {
  render() {
    return (
      <div>
        <h1>JavaTpoint</h1>
      </div>
    );
  }
}

class Second extends React.Component {
  render() {
    return (
      <div>
        <h2>www.javatpoint.com</h2>
        <p>This websites contains the great CS tutorial.</p>
      </div>
    );
  }
}
export default App;
```

## Class Components

```javascript
class MyComponent extends React.Component {
  render() {
    return <div>This is main component.</div>;
  }
}
```

```javascript
import React, { Component } from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          name: "Abhishek",
        },
        {
          name: "Saharsh",
        },
        {
          name: "Ajay",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <StudentName />
        <ul>
          {this.state.data.map((item) => (
            <List data={item} />
          ))}
        </ul>
      </div>
    );
  }
}

class StudentName extends React.Component {
  render() {
    return (
      <div>
        <h1>Student Name Detail</h1>
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    return (
      <ul>
        <li>{this.props.data.name}</li>
      </ul>
    );
  }
}

export default App;
```
