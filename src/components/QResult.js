import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

class QResult extends Component {
  render() {
    const { question, vote } = this.props;
    const votesQuestion1 = question.optionOne.votes.length;
    const votesQuestion2 = question.optionTwo.votes.length;
    const amountOfAnswers = votesQuestion1 + votesQuestion2;
    const percentageQuestion1 =
      votesQuestion1 === 0
        ? 0
        : Math.round((votesQuestion1 / amountOfAnswers) * 100);
    const percentageQuestion2 =
      votesQuestion2 === 0
        ? 0
        : Math.round((votesQuestion2 / amountOfAnswers) * 100);
    const inlineStyle1 = { width: `${percentageQuestion1}%` };
    const inlineStyle2 = { width: `${percentageQuestion2}%` };
    return (
      <Fragment>
        <h4 className="card-title">Would you rather ?</h4>
        <h6 className="card-text">
          {question.optionOne.text}{" "}
          {vote === "optionOne" && (
            <span className="badge badge-danger">Your choice</span>
          )}
        </h6>
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={inlineStyle1}
          ></div>
        </div>
        <p>People who voted : {votesQuestion1}</p>
        <p>{percentageQuestion1}%</p>
        <h6 className="card-text">
          {question.optionTwo.text}{" "}
          {vote === "optionTwo" && (
            <span className="badge badge-danger">Your choice</span>
          )}
        </h6>
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={inlineStyle2}
          ></div>
        </div>
        <p>People who voted : {votesQuestion2}</p>
        <p>{percentageQuestion2}%</p>
        <hr />
        <NavLink to="/" exact className="btn btn-primary">
          Back
        </NavLink>
      </Fragment>
    );
  }
}

export default QResult;
