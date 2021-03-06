export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";
export const Add_ANSWER_TO_USER = "Add_ANSWER_TO_USER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users: users,
  };
}

export function addQuestionToUser(question) {
  return {
    type: ADD_QUESTION_TO_USER,
    question,
  };
}

export function addAnswerToUser(answer) {
  return {
    type: Add_ANSWER_TO_USER,
    answer,
  };
}
