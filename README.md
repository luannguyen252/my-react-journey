# React

> React is a User Interface (UI) library. React is a tool for building UI components

[React](https://reactjs.org/)

> A JavaScript library for building user interfaces

## NextJS

[NextJS](https://nextjs.org/)

```bash
$ npx create-next-app --ts
```

[NextJS Starter Blog](https://github.com/JoseRFelix/nextjs-starter-blog)

```bash
$ git clone https://github.com/JoseRFelix/nextjs-starter-blog.git <project_name>
$ cd <project_name>
$ npm i && npm run dev
```

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

## Examples

[React.js Examples](https://reactjsexample.com/)

## Libaries

- [react-helmet](https://github.com/nfl/react-helmet)
- [react-i18next](https://github.com/i18next/react-i18next)
- [i18next](https://github.com/i18next/i18next)
- [i18next-browser-languagedetector](https://github.com/i18next/i18next-browser-languageDetector)
- [react-lazyload](https://github.com/twobin/react-lazyload)
- [react-lottie](https://github.com/chenqingspring/react-lottie)
- [react-markdown](https://github.com/remarkjs/react-markdown)
- [react-medium-image-zoom](https://github.com/tommoor/react-medium-image-zoom)
- [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
- [framer-motion](https://github.com/framer/motion)
- [formik](https://github.com/formium/formik)
- [firebase](https://www.npmjs.com/package/firebase)
- [intersection-observer](https://github.com/researchgate/react-intersection-observer)
- [react-intersection-observer](https://github.com/researchgate/react-intersection-observer)
- [react-spline](https://github.com/utkarshdubey/react-spline)
- [react-simple-typewriter](https://github.com/awran5/react-simple-typewriter)
- [Write videos in React.](https://www.remotion.dev/)

## 3D Libaries

- [Spline - Design tool for 3D web experiences](https://spline.design/)

## Authentication

- [Okta](https://www.okta.com/)

> Okta is one trusted platform to secure every identity, from customers to your workforce with Single Sign-On, Multi-factor Authentication, Lifecycle Management, and more.

## React UI Library

- [Karakoy - A set of 16 Beautiful React UI Card Components](https://codekits.co/karakoy.html)
- [Corfu - Beautiful React UI Kit](https://codekits.co/corfu.html)

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
# Remove node_modules
rm -rf node_modules
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
