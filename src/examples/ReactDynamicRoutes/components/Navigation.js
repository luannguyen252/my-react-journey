import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";

export default class Navigation extends PureComponent {
  render() {
    return (
      <nav id="navigation">
        <ul>
          <li>
            <NavLink to="/" title="Home" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" title="About" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" title="Services" activeClassName="active">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" title="Contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
