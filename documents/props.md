# React Props

```javascript
import React, { Component } from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Welcome to {this.props.name} </h1>
        <p>
          <h4>
            Javatpoint is one of the best Java training institute in Noida,
            Delhi, Gurugram, Ghaziabad and Faridabad.
          </h4>
        </p>
      </div>
    );
  }
}

export default App;
```

## Default Props

```javascript
import React, { Component } from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Default Props Example</h1>
        <h3>Welcome to {this.props.name}</h3>
        <p>
          Javatpoint is one of the best Java training institute in Noida, Delhi,
          Gurugram, Ghaziabad and Faridabad.
        </p>
      </div>
    );
  }
}

App.defaultProps = {
  name: "JavaTpoint",
};

export default App;
```

## State and Props

```javascript
import React, { Component } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "JavaTpoint",
    };
  }

  render() {
    return (
      <div>
        <JTP jtpProp={this.state.name} />
      </div>
    );
  }
}

class JTP extends React.Component {
  render() {
    return (
      <div>
        <h1>State & Props Example</h1>
        <h3>Welcome to {this.props.jtpProp}</h3>
        <p>
          Javatpoint is one of the best Java training institute in Noida, Delhi,
          Gurugram, Ghaziabad and Faridabad.
        </p>
      </div>
    );
  }
}

export default App;
```
