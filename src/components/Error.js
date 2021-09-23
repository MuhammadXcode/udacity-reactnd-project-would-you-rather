import React, { Component } from "react";
import { Link } from "react-router-dom";

class Error extends Component {
  render() {
    return (
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Oops, Error 404!!</h4>
        <p>The content you are trying to access does not exist anymore</p>
        <hr />
        <p>
          Return to the home page{""}
          <Link className="navbar-brand" to={"/"}>
            here
          </Link>
        </p>
      </div>
    );
  }
}

export default Error;
