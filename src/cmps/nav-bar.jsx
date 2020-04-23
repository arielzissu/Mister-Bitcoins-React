import React from "react";
import { NavLink } from "react-router-dom";

export default (props) => {
  return (
    <nav className="nav-bar-container">
      <NavLink activeClassName="active" exact to="/">
        HOME
      </NavLink>
      |<NavLink to="/contact">contacts</NavLink>|
      <NavLink to="/charts">Charts</NavLink>
    </nav>
  );
};
