import { getInitialData, saveQuestion, saveQuestionAnswer } from "../utils/api";
import { receiveUsers, addQuestionToUser, addAnswerToUser } from "./users";
import { receiveQuestions, addQuestion, addQuestionAnswer } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading";

//const AUTHED_ID = 'tylermcginnis'
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}

export function handleAddQuestion(optionOneText, optionTwoText, author) {
  return (dispatch, getState) => {
    dispatch(showLoading());
    saveQuestion({
      optionOneText,
      optionTwoText,
      author,
    })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(question));
      })
      .then(() => dispatch(hideLoading()));
  };
}

export function handleAddQuestionAnswer(authedUser, qid, answer) {
  return (dispatch, getState) => {
    dispatch(showLoading());
    saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    })
      .then(() => {
        dispatch(addQuestionAnswer({ authedUser, qid, answer }));
        dispatch(addAnswerToUser({ authedUser, qid, answer }));
      })
      .then(() => dispatch(hideLoading()));
  };
}
