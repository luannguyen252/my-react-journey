import React, { PureComponent } from "react";

export default class Home extends PureComponent {
  render() {
    return (
      <>
        <h1 className="mt-5">Home</h1>
        <p>Not Protected. Anyone can see this.</p>
      </>
    );
  }
}
