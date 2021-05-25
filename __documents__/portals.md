# React Portals

```javascript
render() {
    return ReactDOM.createPortal(
        this.props.children,
        myNode,
    );
}
```

## When to use?

The common use-cases of React portal include:

1. Modals
2. Tooltips
3. Floating menus
4. Widgets

**Install:**

```bash
npm install react-portal
```

## React Portals Example

```javascript
// App.js
import React, { Component } from "react";
import PortalDemo from "./PortalDemo.js";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <PortalDemo />
      </div>
    );
  }
}

// PortalDemo.js
import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>Portals Demo</h1>,
    document.getElementById("portal-root")
  );
}

export default PortalDemo;
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <noscript>It is required to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <div id="portal-root"></div>
  </body>
</html>
```
