import React, { Component } from "react";
import { connect } from "react-redux";
import QResult from "./QResult";
import QVote from "./QVote";
import { handleAddQuestionAnswer } from "../actions/shared";
import Date from "./Date";
import Error from "./Error";

class QData extends Component {
  render() {
    const { question, questionExists, isAnswered, user, vote } = this.props;
    if (questionExists) {
      return (
        <div className="card mb-12">
          <h5 className="card-header">
            <Date timestamp={question.timestamp} />
          </h5>
          <div className="row no-gutters">
            <div className="col-md-4">
              <div className="col-md-12">
                <img
                  src={user.avatarURL}
                  className="card-img"
                  alt={`Avatar of ${user.name}`}
                />
                <p className="username">{user.name}</p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                {isAnswered && <QResult question={question} vote={vote} />}
                {!isAnswered && (
                  <QVote
                    question={question}
                    saveQuestionAnswer={this.saveQuestionAnswer}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <Error />;
    }
  }

  saveQuestionAnswer = (selectedOption) => {
    const { dispatch, authedUser, id } = this.props;
    dispatch(handleAddQuestionAnswer(authedUser, id, selectedOption));
  };
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const id = props.match.params.id;
  const question = questions[id];
  const questionExists = !question ? false : true;
  const isAnswered = !!question
    ? question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser)
    : false;
  const vote = isAnswered
    ? question.optionOne.votes.includes(authedUser)
      ? "optionOne"
      : "optionTwo"
    : null;
  const user = users && question ? users[question.author] : null;
  return {
    id,
    authedUser,
    question,
    questionExists,
    isAnswered,
    user,
    vote,
  };
}

export default connect(mapStateToProps)(QData);
