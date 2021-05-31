import React, { Component } from "react";

export default class ToggleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState = () => {
    this.setState({
      login: !this.state.login,
    });
  };

  render() {
    const { login } = this.state;
    return (
      <div className="App-body">
        <button
          type="button"
          className={login ? "btn-primary" : "btn-danger"}
          onClick={this.changeState}
        >
          {login ? " Login" : " Log Out"}
        </button>
      </div>
    );
  }
}
