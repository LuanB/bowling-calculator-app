import React from "react";

import { NavLink, withRouter } from "react-router-dom";

const NavBar = prps => {
  return (
    <nav className="nav-wrapper grey darken-4">
      <div className="container">
        <ul className="left">
          <li>
            <NavLink to="/">
              <h5>Bowling Score App</h5>
            </NavLink>
          </li>
        </ul>
        <ul className="right">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">Calculate Bowling Score</NavLink>
          </li>
          <li>
            <i className="large material-icons">menu</i>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(NavBar);
