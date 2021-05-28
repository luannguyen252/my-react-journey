# React

## Tutorials

- [React Tutorial - W3Schools](https://www.w3schools.com/react/)
- [ReactJS Tutorial - Tutorials Point](https://www.tutorialspoint.com/reactjs/index.htm)
- [ReactJS Tutorial - JavaTPoint](https://www.javatpoint.com/reactjs-tutorial)

## Courses

- [The React Bootcamp - Scrimba](https://scrimba.com/learn/react)
- [Learn React for free - Scrimba](https://scrimba.com/learn/learnreact)
- [Learn React Hooks In One Hour - Scrimba](https://scrimba.com/learn/reacthooks)
- [Build Tic Tac Toe with React Hooks - Scrimba](https://scrimba.com/learn/reactgame)
- [Build an app with React and GraphQL - Scrimba](https://scrimba.com/learn/reactgraphql)
- [Build a movie search app in React - Scrimba](https://scrimba.com/learn/reactmovie)
- [Building Reusable React - Scrimba](https://scrimba.com/learn/reusablereact)
- [Build an Instagram Clone in React - Scrimba](https://scrimba.com/learn/photoapp)
- [Learn Styled Components in React - Scrimba](https://scrimba.com/learn/styledcomponents)

## Installation

```bash
# 1. Create project
npx create-react-app ReactApp
# 2. Go to project
cd ReactApp
# 3. Start project
npm start
# Create a new project with TypeScript (optional)
npx create-react-app react-typescript-example --template typescript
```

### Use Storybook

```bash
# Create project
npx create-react-app ReactStorybookApp

# Go to project
cd ReactStorybookApp

# Initialise storybook into project
npx -p @storybook/cli sb init

# Or force Initialise storybook into project
npx -p @storybook/cli sb init -f
```

### Use functional components

```javascript
function Welcome(props) {
  return <h1>Welcome, {props.name}</h1>;
}
```

Accepts `props` as its argument and returns a React element.

**Benefits of functional components:**

- Less code
- Easier to understamd
- Stateless
- Simpler to test
- No `this` binding
- Easier to extract smaller components

### Keep your components small

**Small components are easier to:**

- Read
- Test
- Maintain
- Reuse

```javascript
// Comment.js
class Comment extends Component {
  render() {
    return <div className="comment"></div>;
  }
}
```

```javascript
// UserInfo.js
function UserInfo(props) {
  return (
    <div className="user-info">
      <Avatar user={props.user} />
      <div className="user-info__name">{props.user.name}</div>
    </div>
  );
}
```

```javascript
function Avatar(props) {
  return (
    <img
      className="user-info__avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
```

### Understand how to handle `this`

1. Bind in render

```javascript
class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "Hi" };
  }

  logMessage() {
    console.log(this.state.message);
  }

  render() {
    return (
      <input type="button" value="Log" onClick={this.logMessage.bind(this)} />
    );
  }
}
```

2. Use arrow function in render

```javascript
class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "Hi" };
  }

  logMessage() {
    console.log(this.state.message);
  }

  render() {
    return (
      <input type="button" value="Log" onClick={() => this.logMessage())} />
    );
  }
}
```

3. Bind in constructor

```javascript
class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "Hi" };
    this.logMessage = this.logMessage.bind(this);
  }

  logMessage() {
    console.log(this.state.message);
  }

  render() {
    return <input type="button" value="Log" onClick={this.logMessage} />;
  }
}
```

4. Arrow function in Class Property

```javascript
class HelloWorld extends Component {
  state = {
    message: "Hi",
  };

  logMessage = () => {
    console.log(this.state.message);
  };

  render() {
    return <input type="button" value="Log" onClick={this.logMessage} />;
  }
}
```

### Use a function on `setState`, not an object

React does not guarantee state changes are applied immediately

```javascript
this.setState({ correctData: !this.state.correctData });
```

Update to Function:

```javascript
this.setState((prevState, props) => {
  return { correctData: !prevState.correctData });
}
```

Function will receive the previous state as its first argument, and the props at the time the update is applied as its second argument.

### Utilize prop-types

`prop-types` is a library for type checking props

1. Install `prop-types`

```bash
npm install prop-types
```

2. Use `prop-types`

```javascript
import PropTypes from "prop-types";

class Welcome extends Component {
  render() {
    return <h1>Welcome, {this.props.name}</h1>;
  }
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
};
```
