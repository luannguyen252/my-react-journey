# React Props Validation

## Validating Props

```javascript
class App extends React.Component {
  render() {}
}

Component.propTypes = {
  /* Definition */
};
```

## ReactJS Props Validator

`PropTypes.any`: The props can be of any data type.

`PropTypes.array`: The props should be an array.

`PropTypes.bool`: The props should be a boolean.

`PropTypes.func`: The props should be a function.

`PropTypes.number`: The props should be a number.

`PropTypes.object`: The props should be an object.

`PropTypes.string`: The props should be a string.

`PropTypes.symbol`: The props should be a symbol.

`PropTypes.instanceOf`: The props should be an instance of a particular JavaScript class.

`PropTypes.isRequired`: The props must be provided.

`PropTypes.element`: The props must be an element.

`PropTypes.node`: The props can render anything: numbers, strings, elements or an array (or fragment) containing these types.

`PropTypes.oneOf()`: The props should be one of several types of specific values.

`PropTypes.oneOfType([PropTypes.string,PropTypes.number])`: The props should be an object that could be one of many types.

## Example

```javascript
import React, { Component } from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>ReactJS Props validation example</h1>
        <table>
          <tr>
            <th>Type</th>
            <th>Value</th>
            <th>Valid</th>
          </tr>
          <tr>
            <td>Array</td>
            <td>{this.props.propArray}</td>
            <td>{this.props.propArray ? "true" : "False"}</td>
          </tr>
          <tr>
            <td>Boolean</td>
            <td>{this.props.propBool ? "true" : "False"}</td>
            <td>{this.props.propBool ? "true" : "False"}</td>
          </tr>
          <tr>
            <td>Function</td>
            <td>{this.props.propFunc(5)}</td>
            <td>{this.props.propFunc(5) ? "true" : "False"}</td>
          </tr>
          <tr>
            <td>String</td>
            <td>{this.props.propString}</td>
            <td>{this.props.propString ? "true" : "False"}</td>
          </tr>
          <tr>
            <td>Number</td>
            <td>{this.props.propNumber}</td>
            <td>{this.props.propNumber ? "true" : "False"}</td>
          </tr>
        </table>
      </div>
    );
  }
}

App.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propFunc: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string,
};

App.defaultProps = {
  propArray: [1, 2, 3, 4, 5],
  propBool: true,
  propFunc: function (x) {
    return x + 5;
  },
  propNumber: 1,
  propString: "JavaTpoint",
};

export default App;
```

## ReactJS Custom Validators

- **props:** It should be the first argument in the component.

- **propName:** It is the propName that is going to validate.

- **componentName:** It is the componentName that are going to validated again.

```javascript
var Component = React.createClass({

App.propTypes = {
    customProp: function(props, propName, componentName) {
        if (!item.isValid(props[propName])) {
            return new Error('Validation failed!');
        }
        }
    }
})
```
