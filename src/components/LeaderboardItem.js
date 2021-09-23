import React, { Component } from "react";
import { connect } from "react-redux";

class LeaderboardItem extends Component {
  render() {
    const { user, isMe } = this.props;
    const { name, avatarURL, answers, questions } = user;
    const answered = Object.keys(answers).length;
    const asked = questions.length;
    const sum = answered + asked;
    return (
      <div className="card mb-12">
        <h5 className="card-header">
          {name} {isMe && <span className="badge badge-secondary">You</span>}
        </h5>
        <div className="row no-gutters">
          <div className="col-md-4">
            <div className="col-md-12">
              <img
                src={avatarURL}
                className="card-img"
                alt={`Avatar of ${name}`}
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">User Statistics : </h3>
              <h5 className="card-text">
                Questions answered :{" "}
                <span className="badge badge-secondary">{answered}</span>
              </h5>
              <h5 className="card-text">
                Questions asked :{" "}
                <span className="badge badge-secondary">{asked}</span>
              </h5>
              <hr />
              <h2 className="card-text">
                Score : <span className="badge badge-secondary">{sum}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }, { id }) {
  const user = users[id];
  const isMe = user.id === authedUser;
  return {
    user,
    isMe,
  };
}

export default connect(mapStateToProps)(LeaderboardItem);
