import React, { Component } from "react";
import { connect } from "react-redux";
import LeaderboardItem from "./LeaderboardItem";

class Leaderboard extends Component {
  render() {
    const { userIdsSorted } = this.props;
    return (
      <div>
        {userIdsSorted.map((id) => (
          <LeaderboardItem id={id} key={id} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const userIds = Object.keys(users);
  const userIdsSorted = userIds.sort(
    (a, b) =>
      Object.keys(users[b].answers).length +
      users[b].questions.length -
      (Object.keys(users[a].answers).length + users[a].questions.length)
  );
  return {
    userIdsSorted,
  };
}

export default connect(mapStateToProps)(Leaderboard);
