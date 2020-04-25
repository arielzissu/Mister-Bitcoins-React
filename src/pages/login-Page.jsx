import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { signup } from "../store/actions/UserActions";
import { ReactComponent as CoinImg } from "../assets/svg/coin1.svg";

export class LoginPage extends Component {
  state = {
    username: "",
  };

  changeHandle = (ev) => {
    this.setState({ username: ev.target.value });
  };

  loginHandle = () => {
    this.props.signup(this.state.username);
    this.setState({ username: "" });
    this.props.history.push("/");
  };

  render() {
    if (this.props.loggedinUser) return <Redirect to="/" />;
    return (
      <section className="login-page-container">
        <CoinImg className="img" title="Coin" />
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

const mapStateToProps = (state) => ({
  loggedinUser: state.user.loggedinUser,
});

const mapDispatchToProps = {
  signup,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
