import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from "../actions/shared";

class QNew extends Component {
  state = {
    option1: "",
    option2: "",
    toHome: false,
  };

  handleChangeOption1 = (e) => {
    const option1 = e.target.value;
    this.setState(() => ({
      option1,
    }));
  };

  handleChangeOption2 = (e) => {
    const option2 = e.target.value;
    this.setState(() => ({
      option2,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { option1, option2 } = this.state;
    const { dispatch, authedUser } = this.props;

    dispatch(handleAddQuestion(option1, option2, authedUser));
    this.setState(() => ({
      option1: "",
      option2: "",
      toHome: true,
    }));
  };

  render() {
    const { option1, option2, toHome } = this.state;

    if (toHome === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className="card">
        <div className="card-header">Add a new Poll</div>
        <div className="card-body">
          <form className="new-tweet" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Option 1</label>
              <input
                type="text"
                className="form-control"
                value={option1}
                onChange={this.handleChangeOption1}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Option 2</label>
              <input
                type="text"
                className="form-control"
                value={option2}
                onChange={this.handleChangeOption2}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={option1 === "" || option2 === ""}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(QNew);
