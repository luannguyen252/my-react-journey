import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import UseState from "./pages/UseState";
import UseEffect from "./pages/UseEffect";
import UseContext from "./pages/UseContext";
import UseReducer from "./pages/UseReducer";
import UseCallback from "./pages/UseCallback";
import UseMemo from "./pages/UseMemo";
import UseRef from "./pages/UseRef";
import UseImperativeHandle from "./pages/UseImperativeHandle";
import UseLayoutEffect from "./pages/UseLayoutEffect";
import UseDebugValue from "./pages/UseDebugValue/";

export default function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/use-state">useState</Link>
              </li>
              <li>
                <Link to="/use-effect">useEffect</Link>
              </li>
              <li>
                <Link to="/use-context">useContext</Link>
              </li>
              <li>
                <Link to="/use-reducer">useReducer</Link>
              </li>
              <li>
                <Link to="/use-callback">useCallback</Link>
              </li>
              <li>
                <Link to="/use-memo">useMemo</Link>
              </li>
              <li>
                <Link to="/use-ref">useRef</Link>
              </li>
              <li>
                <Link to="/use-imperative-handle">useImperativeHandle</Link>
              </li>
              <li>
                <Link to="/use-layout-effect">useLayoutEffect</Link>
              </li>
              <li>
                <Link to="/use-debug-value">useDebugValue</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/use-state">
            <UseState />
          </Route>
          <Route path="/use-effect">
            <UseEffect />
          </Route>
          <Route path="/use-context">
            <UseContext />
          </Route>
          <Route path="/use-reducer">
            <UseReducer />
          </Route>
          <Route path="/use-callback">
            <UseCallback />
          </Route>
          <Route path="/use-memo">
            <UseMemo />
          </Route>
          <Route path="/use-ref">
            <UseRef />
          </Route>
          <Route path="/use-imperative-handle">
            <UseImperativeHandle />
          </Route>
          <Route path="/use-layout-effect">
            <UseLayoutEffect />
          </Route>
          <Route path="/use-debug-value">
            <UseDebugValue />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
