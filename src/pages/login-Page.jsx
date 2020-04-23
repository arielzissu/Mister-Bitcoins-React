import React, { Component } from "react";
import userService from "../services/user.service";

export default class LoginPage extends Component {
  state = {
    input: null,
  };

  changeHandle = (el) => {
    this.setState({ input: el.target.value });
  };

  loginHandle = () => {
    userService.addUser(this.state.input);
    this.props.history.push("/");
  };

  render() {
    return (
      <section className="login-page-container">
        <img src="./assets/svg/coin1.svg" alt="Welcome home!" />
        <h2>Please enter your name:</h2>
        <input
          type="text"
          placeholder="Enter name"
          onChange={this.changeHandle}
        />
        <div className="login-page-btn btn" onClick={this.loginHandle}>
          Login
        </div>
      </section>
    );
  }
}
