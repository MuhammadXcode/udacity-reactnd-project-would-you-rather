import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class NavBarLinks extends Component {
  render() {
    return (
      <div>
        <Link className="navbar-brand" to={"/"}>
          Home
        </Link>
        <Fragment>
          <Link className="navbar-brand" to={"/add"}>
            New Question
          </Link>
          <Link className="navbar-brand" to={"/leaderboard"}>
            Leaderboard
          </Link>
        </Fragment>
      </div>
    );
  }
}

export default NavBarLinks;
