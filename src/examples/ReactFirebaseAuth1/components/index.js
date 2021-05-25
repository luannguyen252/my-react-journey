import React, { PureComponent } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Route,
  BrowserRouter,
  Link,
  NavLink,
  Redirect,
  Switch,
} from "react-router-dom";
import { logout } from "../helpers/auth";
import { firebaseAuth } from "../config/constants";

import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Dashboard from "./protected/Dashboard";

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

function PublicRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authed === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/dashboard" />
        )
      }
    />
  );
}

export default class App extends PureComponent {
  state = {
    authed: false,
    loading: true,
  };

  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        });
      } else {
        this.setState({
          authed: false,
          loading: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return this.state.loading === true ? (
      <h1>Loading</h1>
    ) : (
      <BrowserRouter>
        <>
          <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
              <NavLink to="/" className="navbar-brand">
                React Firebase
              </NavLink>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/dashboard"
                      className="nav-link"
                      activeClassName="active"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  {this.state.authed ? (
                    <li className="nav-item">
                      <Link
                        to="/dashboard"
                        className="nav-link"
                        onClick={() => {
                          logout();
                        }}
                      >
                        Logout
                      </Link>
                    </li>
                  ) : (
                    <>
                      <li className="nav-item">
                        <NavLink
                          to="/login"
                          className="nav-link"
                          activeClassName="active"
                        >
                          Login
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink
                          to="/register"
                          className="nav-link"
                          activeClassName="active"
                        >
                          Register
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </nav>
          </header>

          <main role="main">
            <div className="container">
              <Switch>
                <Route path="/" exact component={Home} />
                <PublicRoute
                  authed={this.state.authed}
                  path="/login"
                  component={Login}
                />
                <PublicRoute
                  authed={this.state.authed}
                  path="/register"
                  component={Register}
                />
                <PrivateRoute
                  authed={this.state.authed}
                  path="/dashboard"
                  component={Dashboard}
                />
                <Route render={() => <h1 className="mt-5">No Match</h1>} />
              </Switch>
            </div>
          </main>
        </>
      </BrowserRouter>
    );
  }
}
