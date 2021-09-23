import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Date from "./Date";

class QItem extends Component {
  render() {
    const { question, user } = this.props;
    const { timestamp, optionOne, optionTwo } = question;

    return (
      <div className="card mb-12">
        <h5 className="card-header">
          <Date timestamp={timestamp} />
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
              <h4 className="card-title">Would you rather ?</h4>
              <h6 className="card-text">{`...${optionOne.text}`}</h6>
              <h6 className="card-text">{`...${optionTwo.text}`}</h6>
              <Link
                className="btn btn-primary"
                to={`/questions/${this.props.id}`}
              >
                Open
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id];
  return {
    user: users[question.author],
    question,
  };
}

export default withRouter(connect(mapStateToProps)(QItem));
