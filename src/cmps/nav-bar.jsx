import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { loadUser, logout } from "../store/actions/UserActions";

export class NavBar extends Component {
  constructor(props) {
    super(props);
    props.loadUser();
  }

  onLogoutClickHandler = () => {
    this.props.logout();
    this.props.history.push("/login");
  };

  render() {
    return (
      <nav className="nav-bar-container">
        <NavLink activeClassName="active" exact to="/">
          HOME
        </NavLink>
        |<NavLink to="/contact">Contacts</NavLink>|
        <NavLink to="/charts">Charts</NavLink>|
        <div onClick={this.onLogoutClickHandler}>Logout</div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedinUser: state.user.loggedinUser,
});

const mapDispatchToProps = {
  loadUser,
  logout,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
