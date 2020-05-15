import {_getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer} from './_DATA'

export function saveQuestion(question) {
  return _saveQuestion(question)
}

export function saveQuestionAnswer(answer_info) {
  return _saveQuestionAnswer(answer_info)
}

export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, tweets]) => ({
    users,
    questions,
  }))
}
