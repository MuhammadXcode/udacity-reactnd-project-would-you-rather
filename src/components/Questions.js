import React, { Component } from "react";
import QItem from "./QItem";
import { connect } from "react-redux";

const SHOW_QUESTIONS_UNANSWERED = "SHOW_QUESTIONS_UNANSWERED";
const SHOW_QUESTIONS_ANSWERED = "SHOW_QUESTIONS_ANSWERED";

class Questions extends Component {
  state = { showQuestions: SHOW_QUESTIONS_UNANSWERED };

  handleQuestionState = (e) => {
    e.preventDefault();
    var toggle = e.target.getAttribute("data-toggle");
    if (toggle) {
      this.setState(() => ({
        showQuestions: toggle,
      }));
    }
  };

  render() {
    const { unAnsweredQ, answeredQ } = this.props;
    const unAnsweredQOrdered = Object.values(unAnsweredQ)
      .sort((a, b) => b.timestamp - a.timestamp)
      .map((q) => q.id);
    const answeredQOrdered = Object.values(answeredQ)
      .sort((a, b) => b.timestamp - a.timestamp)
      .map((q) => q.id);

    return (
      <div>
        <div>
          <div
            className="btn-group mb-4"
            role="group"
            aria-label="Basic example"
          >
            <button
              onClick={this.handleQuestionState}
              type="button"
              className="btn btn-secondary"
              data-toggle={SHOW_QUESTIONS_UNANSWERED}
              id="toggleunAnsweredQ"
              disabled={this.state.showQuestions === SHOW_QUESTIONS_UNANSWERED}
            >
              Unanswered{" "}
              <span className="badge badge-light">{unAnsweredQ.length}</span>
            </button>
            <button
              onClick={this.handleQuestionState}
              type="button"
              className="btn btn-secondary"
              data-toggle={SHOW_QUESTIONS_ANSWERED}
              id="toggleansweredQ"
              disabled={this.state.showQuestions === SHOW_QUESTIONS_ANSWERED}
            >
              Answered{" "}
              <span className="badge badge-light">{answeredQ.length}</span>
            </button>
          </div>
        </div>
        {this.state.showQuestions === SHOW_QUESTIONS_UNANSWERED && (
          <div id="unAnsweredQ">
            {unAnsweredQOrdered.map((id) => (
              <QItem key={id} id={id} />
            ))}

            {unAnsweredQ.length === 0 && (
              <div className="alert alert-primary" role="alert">
                <h4 className="alert-heading">Well done!</h4>
                <p>You answered all available questions</p>
              </div>
            )}
          </div>
        )}
        {this.state.showQuestions === SHOW_QUESTIONS_ANSWERED && (
          <div id="answeredQ">
            {answeredQOrdered.map((id) => (
              <QItem key={id} id={id} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions }) {
  const unAnsweredQ = Object.values(questions).filter(
    (question) =>
      !question.optionOne.votes.includes(authedUser) &&
      !question.optionTwo.votes.includes(authedUser)
  );
  const answeredQ = Object.values(questions).filter(
    (question) =>
      question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser)
  );
  return {
    unAnsweredQ,
    answeredQ,
  };
}

export default connect(mapStateToProps)(Questions);
