# React Bootstrap

## React Bootstrap Example 1

```javascript
import React, { Component } from "react";
import { SplitButton, Dropdown } from "react-bootstrap";

export default class ThemeSwitcher extends Component {
  state = { theme: null };

  chooseTheme = (theme, evt) => {
    evt.preventDefault();
    if (theme.toLowerCase() === "reset") {
      theme = null;
    }
    this.setState({ theme });
  };

  render() {
    const { theme } = this.state;
    const themeClass = theme ? theme.toLowerCase() : "default";

    const parentContainerStyles = {
      position: "absolute",
      height: "100%",
      width: "100%",
      display: "table",
    };

    const subContainerStyles = {
      position: "relative",
      height: "100%",
      width: "100%",
      display: "table-cell",
    };

    return (
      <div style={parentContainerStyles}>
        <div style={subContainerStyles}>
          <span
            className={`h1 center-block text-center text-${
              theme ? themeClass : "muted"
            }`}
            style={{ marginBottom: 25 }}
          >
            {theme || "Default"}
          </span>

          <div className="center-block text-center">
            <SplitButton
              bsSize="large"
              bsStyle={themeClass}
              title={`${theme || "Default Block"} Theme`}
            >
              <Dropdown.Item
                eventKey="Primary Block"
                onSelect={this.chooseTheme}
              >
                Primary Theme
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="Danger Block"
                onSelect={this.chooseTheme}
              >
                Danger Theme
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="Success Block"
                onSelect={this.chooseTheme}
              >
                Success Theme
              </Dropdown.Item>
              <Dropdown.Item divider />
              <Dropdown.Item eventKey="Reset Block" onSelect={this.chooseTheme}>
                Default Theme
              </Dropdown.Item>
            </SplitButton>
          </div>
        </div>
      </div>
    );
  }
}
```

## React Bootstrap Example 2

```javascript
import React, { Component } from "react";
import {
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default class ThemeSwitcher extends Component {
  state = { theme: null, dropdownOpen: false };

  toggleDropdown = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };

  resetTheme = (evt) => {
    evt.preventDefault();
    this.setState({ theme: null });
  };

  chooseTheme = (theme, evt) => {
    evt.preventDefault();
    this.setState({ theme });
  };
  render() {
    const { theme, dropdownOpen } = this.state;
    const themeClass = theme ? theme.toLowerCase() : "secondary";

    return (
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        <span className={`h1 mb-4 w-100 text-center text-${themeClass}`}>
          {theme || "Default"}
        </span>

        <ButtonDropdown isOpen={dropdownOpen} toggle={this.toggleDropdown}>
          <Button id="caret" color={themeClass}>
            {theme || "Custom"} Theme
          </Button>
          <DropdownToggle caret size="lg" color={themeClass} />
          <DropdownMenu>
            <DropdownItem onClick={(e) => this.chooseTheme("Primary", e)}>
              Primary Theme
            </DropdownItem>
            <DropdownItem onClick={(e) => this.chooseTheme("Danger", e)}>
              Danger Theme
            </DropdownItem>
            <DropdownItem onClick={(e) => this.chooseTheme("Success", e)}>
              Success Theme
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={this.resetTheme}>Default Theme</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    );
  }
}
```
