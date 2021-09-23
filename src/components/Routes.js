import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Questions from "./Questions";
import QData from "./QData";
import QNew from "./QNew";
import Leaderboard from "./Leaderboard";
import Error from "./Error";

class Routes extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/" exact component={Questions} />
          <Route path="/questions/:id" component={QData} />
          <Route path="/add" exact component={QNew} />
          <Route path="/leaderboard" exact component={Leaderboard} />
          <Route component={Error} />
        </Switch>
      </Fragment>
    );
  }
}

export default Routes;
