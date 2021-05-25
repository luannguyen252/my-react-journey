# React Router

- Routing is a process in which a user is directed to different pages based on their action or request.
- React Router is used to define multiple routes in the application.

## Need of React Router

- React Router plays an important role to display multiple views in a single page application.
- Without React Router, it is not possible to display multiple views in React applications.
- Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.

**Install:**

```bash
npm install react-router-dom
```

## Components in React Router

There are two types of router components:

**<BrowserRouter>:** It is used for handling the dynamic URL.

**<HashRouter>:** It is used for handling the static request.

## React Router Example

**What is Route?** It is used to define and render component based on the specified path. It will accept components and render to define what should be rendered.

**What is <Link> component?** This component is used to create links which allow to navigate on different URLs and render its content without reloading the webpage.

```javascript
// About.js
import React, { Component } from "react";
class About extends Component {
  render() {
    return <h1>About</h1>;
  }
}
export default About;

// Contact.js
import React, { Component } from "react";
class Contact extends Component {
  render() {
    return <h1>Contact</h1>;
  }
}
export default Contact;

// Home.js
import React, { Component } from "react";
class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}
export default Home;

// Index.js using <Link>
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import App from "./App";
import About from "./About";
import Contact from "./Contact";
import "./index.css";

const routing = (
  <Router>
    <div>
      <h1>React Router Example</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// Index.js using <NavLink>
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import App from "./App";
import About from "./About";
import Contact from "./Contact";
import "./index.css";

const routing = (
  <Router>
    <div>
      <h1>React Router Example</h1>
      <ul>
        <li>
          <NavLink to="/" exact activeStyle={{ color: "red" }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact activeStyle={{ color: "green" }}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" exact activeStyle={{ color: "magenta" }}>
            Contact
          </NavLink>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
```

## <Link> vs <NavLink>

- The `Link` component allows navigating the different routes on the websites
- `NavLink` component is used to add styles to the active routes.

## React Router Switch

> The **<Switch>** component is used to render components only when the path will be **matched**. Otherwise, it returns to the not found component.

```javascript
// NotFound.js
import React from "react";
const NotFound = () => <h1>Not Found</h1>;
export default NotFound;
```

```javascript
// Index.js
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";
import App from "./App";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import "./index.css";

const routing = (
  <Router>
    <div>
      <h1>React Router Example</h1>
      <ul>
        <li>
          <NavLink to="/" exact activeStyle={{ color: "red" }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact activeStyle={{ color: "green" }}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" exact activeStyle={{ color: "magenta" }}>
            Contact
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
```

## React Router <Redirect>

> A **<Redirect>** component is used to redirect to another route in our application to maintain the old URLs. It can be placed anywhere in the route hierarchy.

**Nested Routing in React** Nested routing allows you to render sub-routes in your application.

```javascript
// Index.js
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";

const routing = (
  <Router>
    <div>
      <h1>React Router Example</h1>
      <ul>
        <li>
          <NavLink to="/" exact activeStyle={{ color: "red" }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact activeStyle={{ color: "green" }}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" exact activeStyle={{ color: "magenta" }}>
            Contact
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// Contact.js
import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const Contacts = ({ match }) => <p>{match.params.id}</p>;

class Contact extends Component {
  render() {
    const { url } = this.props.match;

    return (
      <div>
        <h1>Welcome to Contact Page</h1>
        <strong>Select contact Id</strong>
        <ul>
          <li>
            <Link to="/contact/1">Contacts 1</Link>
          </li>
          <li>
            <Link to="/contact/2">Contacts 2</Link>
          </li>
          <li>
            <Link to="/contact/3">Contacts 3</Link>
          </li>
          <li>
            <Link to="/contact/4">Contacts 4</Link>
          </li>
        </ul>
        <Route path="/contact/:id" component={Contacts} />
      </div>
    );
  }
}

export default Contact;
```

## Benefits of React Router

1. It is not necessary to set the browser history manually.
2. Link uses to navigate the internal links in the application. It is similar to the anchor tag.
3. It uses Switch feature for rendering.
4. The Router needs only a Single Child element.
5. Every component is specified in.
