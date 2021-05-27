# React Events

> An event is an action that could be triggered as a result of the user action or system generated event. For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events.

1. React events are named as `camelCase` instead of `lowercase`.

2. With JSX, a function is passed as the `event handler` instead of a `string`.

**Event declaration in plain HTML:**

```html
<button onclick="showMessage()">Hello JavaTpoint</button>
```

**Event declaration in React:**

```javascript
<button onClick={showMessage}>Hello JavaTpoint</button>
```

3. In react, we cannot return `false` to prevent the `default` behavior. We must call `preventDefault` event explicitly to prevent the default behavior. For example:

In plain HTML, to prevent the default link behavior of opening a new page, we can write:

```html
<a href="#" onclick="console.log('You had clicked a Link.'); return false">
  Click_Me
</a>
```

In React:

```javascript
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log("You had clicked a Link.");
  }

  return (
    <a href="#" onClick={handleClick}>
      Click_Me
    </a>
  );
}
```

## React Events Example

```javascript
import React, { Component } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
    };
  }

  changeText(event) {
    this.setState({
      companyName: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h2>Simple Event Example</h2>
        <label htmlFor="name">Enter company name: </label>
        <input
          type="text"
          id="companyName"
          onChange={this.changeText.bind(this)}
        />
        <h4>You entered: {this.state.companyName}</h4>
      </div>
    );
  }
}

export default App;
```
