import React, { Component, Fragment } from "react";

class QVote extends Component {
  state = {
    currentOption: "",
  };

  handleChange = (e) => {
    const selectedOption = e.currentTarget.value;
    this.setState(() => ({
      currentOption: selectedOption,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { saveQuestionAnswer } = this.props;
    const { currentOption } = this.state;
    saveQuestionAnswer(currentOption);
  };

  render() {
    const { question } = this.props;
    const { currentOption } = this.state;
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <h5 className="card-title">Would you rather ?</h5>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="optionOne"
              value="optionOne"
              onChange={this.handleChange}
              name="answer"
              checked={currentOption === "optionOne" ? true : false}
            ></input>
            <label className="form-check-label" htmlFor="optionOne">
              {question.optionOne.text}
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="optionTwo"
              value="optionTwo"
              onChange={this.handleChange}
              name="answer"
              checked={currentOption === "optionTwo" ? true : false}
            ></input>
            <label className="form-check-label" htmlFor="optionTwo">
              {question.optionTwo.text}
            </label>
          </div>
          <hr />
          <button
            className="btn btn-primary"
            type="submit"
            disabled={currentOption === ""}
          >
            Submit
          </button>
        </form>
      </Fragment>
    );
  }
}

export default QVote;
