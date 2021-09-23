import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import LoadingBar from "react-redux-loading";
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";
import Login from "./components/Login";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { initialized, authorized } = this.props;
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            {initialized && <NavBar />}
            {authorized && initialized && <Routes />}
            {!authorized && initialized && <Login />}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    users,
    initialized:
      Object.keys(users).length > 0 && Object.keys(questions).length > 0,
    authorized: authedUser != null,
  };
}

export default connect(mapStateToProps)(App);
