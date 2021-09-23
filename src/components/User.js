import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class User extends Component {
  onClickHandler = (e) => {
    const { id, onLogin } = this.props;
    onLogin(id);
  };
  render() {
    const { user, onLogin } = this.props;
    const { name, avatarURL } = user;
    return (
      <div className="card">
        <img
          src={avatarURL}
          width="0px"
          height="0px"
          className="d-inline-block mr-auto card-img-top rounded-circle"
          alt={`Avatar of ${name}`}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          {onLogin && (
            <Fragment>
              <hr />
              <button className="btn btn-primary" onClick={this.onClickHandler}>
                Login
              </button>
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }, { id }) {
  const user = users[id];
  return {
    user,
  };
}

export default connect(mapStateToProps)(User);
