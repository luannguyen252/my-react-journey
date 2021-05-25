import React, { PureComponent } from "react";

export default class Content extends PureComponent {
  render() {
    return <div id="content">{this.props.children}</div>;
  }
}
