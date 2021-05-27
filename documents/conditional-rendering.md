# React Conditional Rendering

## if

```javascript
function UserLoggin(props) {
  return <h1>Welcome back!</h1>;
}

function GuestLoggin(props) {
  return <h1>Please sign up.</h1>;
}

function SignUp(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserLogin />;
  }
  return <GuestLogin />;
}

export default function App() {
  return <SignUp isLoggedIn={false} />;
}
```

## ternary operator

```javascript
export default class App extends Component {
  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return <div>Welcome {isLoggedIn ? "Back" : "Please login first"}.</div>;
  }
}
```

## logical && operator

```javascript
export default function App() {
  return <div>{10 > 5 && alert("This alert will be shown!")}</div>;
}
```

## switch case operator

```javascript
function NotificationMessage({ text }) {
  switch(text) {
    case 'Hi All':
      return <Message: text={text} />;
    case 'Hello React':
      return <Message text={text} />;
    default:
      return null;
  }
}
```

## Conditional Rendering with enums

```javascript
function NotificationMsg({ text, state }) {
  return (
    <div>
      {
        {
          info: <Message text={text} />,
          warning: <Message text={text} />,
        }[state]
      }
    </div>
  );
}
```

## Conditional Rendering Example

```javascript
// Message Component
function Message(props) {
  if (props.isLoggedIn) return <h1>Welcome Back!</h1>;
  else return <h1>Please Login First!</h1>;
}

// Login Component
function Login(props) {
  return <button onClick={props.clickInfo}>Login</button>;
}

// Logout Component
function Logout(props) {
  return <button onClick={props.clickInfo}>Logout</button>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLogin() {
    this.setState({ isLoggedIn: true });
  }

  handleLogout() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    return (
      <div>
        <h1>Conditional Rendering Example</h1>
        <Message isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <Logout clickInfo={this.handleLogout} />
        ) : (
          <Login clickInfo={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default App;
```

## Preventing Component form Rendering

```javascript
function Show(props) {
  if (!props.displayMessage) return null;
  else return <h3>Component is rendered</h3>;
}

export default function App() {
  return (
    <div>
      <h1>Message</h1>
      <Show displayMessage={true} />
    </div>
  );
}
```
