# React JSX

```javascript
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <h1>JavaTpoint</h1>
        <h2>Training Institutes</h2>
        <p>This website contains the best CS tutorials.</p>
      </div>
    );
  }
}

export default App;
```

## JSX Attributes

```javascript
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <h1>JavaTpoint</h1>
        <h2>Training Institutes</h2>
        <p data-demoAttribute="demo">
          This website contains the best CS tutorials.
        </p>
      </div>
    );
  }
}

export default App;
```

**As String Literals**

```javascript
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="hello">JavaTpoint</h1>
        <p data-demoAttribute="demo">
          This website contains the best CS tutorials.
        </p>
      </div>
    );
  }
}

export default App;
```

**As Expressions**

```javascript
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="hello">{25 + 20}</h1>
      </div>
    );
  }
}

export default App;
```

## JSX Comments

```javascript
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="hello">Hello JavaTpoint</h1>
        {/* This is a comment in JSX */}
      </div>
    );
  }
}

export default App;
```

## JSX Styling

```javascript
import React, { Component } from "react";

class App extends Component {
  render() {
    var myStyle = {
      fontSize: 80,
      fontFamily: "Courier",
      color: "#003300",
    };

    return (
      <div>
        <h1 style={myStyle}>www.javatpoint.com</h1>
      </div>
    );
  }
}

export default App;
```

## Use if-else statements

```javascript
import React, { Component } from "react";

class App extends Component {
  render() {
    var i = 5;

    return (
      <div>
        <h1>{i == 1 ? "True!" : "False!"}</h1>
      </div>
    );
  }
}

export default App;
```
