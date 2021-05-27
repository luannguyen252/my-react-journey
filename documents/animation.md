# React Animation

React Transition group has mainly **two APIs** to create transitions:

1. **ReactTransitionGroup:** It uses as a low-level API for animation.
2. **ReactCSSTransitionGroup:** It uses as a high-level API for implementing basic CSS transitions and animations.

**Install:**

```bash
npm install react-transition-group
```

## React Transition Group Components

React Transition Group API provides **three** main components:

1. Transition
2. CSSTransition
3. Transition Group

### Transition

> It has a simple component API to describe a transition from one component state to another over time. It is mainly used to animate the **mounting** and **unmounting** of a component. It can also be used for in-place transition states as well.

- entering
- entered
- exiting
- exited

### CSSTransition

> The CSSTransition component uses CSS stylesheet classes to write the transition and create animations. CSSTransition component must be applied in a pair of class names to the child components. The first class is in the form of **name-stage** and the second class is in the **name-stage-active**.

- Appear
- Enter
- Exit

### Transition Group

- This component is used to manage a set of transition components (Transition and CSSTransition) in a list.

- It is a state machine that controls the **mounting** and **unmounting** of components over time.

```javascript
import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["HTML", "CSS", "JavaScript", "React", "React Native"],
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([prompt("Enter Item Name")]);
    this.setState({ items: newItems });
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));

    return (
      <div>
        <h1>Animation Example</h1>
        <button onClick={this.handleAdd}>Insert Item</button>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={600}
        >
          {items}
        </CSSTransitionGroup>
      </div>
    );
  }
}
```

```css
.example-enter {
  opacity: 0.01;
}

.example-enter.example-enter-active {
  opacity: 1;
  transition: opacity 500ms ease-in;
}

.example-leave {
  opacity: 1;
}

.example-leave.example-leave-active {
  opacity: 0.01;
  transition: opacity 300ms ease-in;
}
```
