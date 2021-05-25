import React, { PureComponent } from "react";

export default class Dashboard extends PureComponent {
  render() {
    return (
      <>
        <h1 className="mt-5">Dashboard</h1>
        <p>
          This is a protected route. You can only see this if you're authed.
        </p>
      </>
    );
  }
}
