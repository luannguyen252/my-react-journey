# React Forms

## Uncontrolled component

> The uncontrolled input is similar to the traditional HTML form inputs. The DOM itself handles the form data. Here, the HTML elements maintain their own state that will be updated when the input value changes. To write an uncontrolled component, you need to use a ref to get form values from the DOM. In other words, there is no need to write an event handler for every state update. You can use a ref to access the input field value of the form from the DOM.

```javascript
import React, { Component } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateSubmit = this.updateSubmit.bind(this);
    this.input = React.createRef();
  }

  updateSubmit(event) {
    alert("You have entered the UserName and CompanyName successfully.");
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.updateSubmit}>
        <h1>Uncontrolled Form Example</h1>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <label>
          CompanyName:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
```

## Controlled component

In HTML, form elements typically maintain their own state and update it according to the user input. In the controlled component, the input form element is handled by the component rather than the DOM. Here, the mutable state is kept in the state property and will be updated only with `setState()` method.

Controlled components have functions that govern the data passing into them on every `onChange event`, rather than grabbing the data only once, e.g., when you click a `submit button`. This data is then saved to state and updated with `setState()` method. This makes component have better control over the form elements and data.

A controlled component takes its current value through `props` and notifies the changes through `callbacks` like an onChange event. A parent component "controls" this changes by handling the callback and managing its own state and then passing the new values as props to the controlled component. It is also called as a "dumb component."

```javascript
import React, { Component } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("You have submitted the input successfully: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Controlled Form Example</h1>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
```

## Handling Multiple Inputs in Controlled Component

If you want to handle multiple controlled input elements, add a `name` attribute to each element, and then the handler function decided what to do based on the value of `event.target.name`.

```javascript
import React, { Component } from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personGoing: true,
      numberOfPersons: 5,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <h1>Multiple Input Controlled Form Example</h1>
        <label>
          Is Person going:
          <input
            name="personGoing"
            type="checkbox"
            checked={this.state.personGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of persons:
          <input
            name="numberOfPersons"
            type="number"
            value={this.state.numberOfPersons}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}

export default App;
```

## Difference table between controlled and uncontrolled component

[Difference table between controlled and uncontrolled component](./controlled-component-vs-uncontrolled-component.png "Difference table between controlled and uncontrolled component")
