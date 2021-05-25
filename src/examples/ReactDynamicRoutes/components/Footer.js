import React, { PureComponent } from "react";

export default class Footer extends PureComponent {
  render() {
    return (
      <footer id="footer">
        <p>&copy; React Router Dynamic Routes {new Date().getFullYear()}.</p>
      </footer>
    );
  }
}
