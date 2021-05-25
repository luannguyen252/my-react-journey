import React, { PureComponent } from "react";

export default class Container extends PureComponent {
  render() {
    return <div className="container">{this.props.children}</div>;
  }
}
