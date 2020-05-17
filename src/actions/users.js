export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER'
export const REMOVE_USER_ANSWER = 'REMOVE_USER_ANSWER'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'


export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function addUserAnswer({loggedUser, qid, answer}) {
  return {
    type: ADD_USER_ANSWER,
    id: loggedUser,
    qid,
    answer
  }
}

export function removeUserAnswer(id, qid) {
  return {
    type: REMOVE_USER_ANSWER,
    id,
    qid,
  }
}

export function addUserQuestion(question) {
  return {
    type: ADD_USER_QUESTION,
    question,
  }
}