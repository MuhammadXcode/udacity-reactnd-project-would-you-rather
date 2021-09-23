import React, { Component, Fragment } from "react";
import NavBarLinks from "./NavBarLinks";
import { resetAuthedUser } from "../actions/authedUser";
import { connect } from "react-redux";

class NavBar extends Component {
  toggleLogin = (e) => {
    const { dispatch, authedUser } = this.props;
    const authorized = authedUser !== null;
    if (authorized) {
      dispatch(resetAuthedUser());
      return;
    }
  };

  render() {
    const { user } = this.props;
    const authorized = !!user ? true : false;
    return (
      <nav className="navbar navbar-dark bg-dark mpx-1 mpy-1">
        <NavBarLinks />
        {user && authorized && (
          <Fragment>
            <div className="navbar-brand mr-auto" href="#">
              Hello: {user.name}{" "}
              <img
                src={user.avatarURL}
                width="auto"
                height="30px"
                className="d-inline-block align-top rounded-circle"
                alt=""
              />
            </div>
            <button className="btn btn-primary" onClick={this.toggleLogin}>
              Logout
            </button>
          </Fragment>
        )}
      </nav>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  const user = users[authedUser];
  return {
    user,
  };
}

export default connect(mapStateToProps)(NavBar);
