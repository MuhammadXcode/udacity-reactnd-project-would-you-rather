import React, { Component } from "react";
import { connect } from "react-redux";
import User from "./User";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  LoginHandler = (userId) => {
    const { dispatch } = this.props;
    dispatch(setAuthedUser(userId));
  };

  render() {
    return (
      <div className="card pb-2 pl-2 pr-2 pt-2">
        <img
          src="https://equimper.gallerycdn.vsassets.io/extensions/equimper/react-native-react-redux/2.0.6/1602247317454/Microsoft.VisualStudio.Services.Icons.Default"
          alt="React-Redux"
          className="card-header rounded mx-auto d-block"
          width="300px"
        />
        <div className="card-body">
          <label><h2>Select a user to login</h2></label>
        </div>
        <div className="card-group">
          {this.props.userIds.map((id) => (
            <User id={id} key={id} onLogin={this.LoginHandler} />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users),
  };
}

export default connect(mapStateToProps)(Login);
