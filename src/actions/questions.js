import {saveQuestionAnswer, saveQuestion} from '../utils/api'
import {addUserAnswer, removeUserAnswer, addUserQuestion} from './users'
import {showLoading, hideLoading} from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const REMOVE_ANSWER = 'REMOVE_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'


export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}


export function saveAnswer(answerInfo) {
  return {
    type: SAVE_ANSWER,
    ...answerInfo,
  }
}

export function removeAnswer(answerInfo) {
  return {
    type: REMOVE_ANSWER,
    ...answerInfo,
  }
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}


export function handleSaveAnswer(qid, answer) {
  return (dispatch, getState) => {
    const {loggedUser} = getState()
    const answerInfo = {loggedUser, qid, answer}
    dispatch(saveAnswer(answerInfo))
    dispatch(addUserAnswer(answerInfo))
    return saveQuestionAnswer(answerInfo).catch(
      (e) => {
        console.warn('Error in handleSaveAnswer', e)
        dispatch(removeAnswer(answerInfo))
        dispatch(removeUserAnswer(loggedUser, qid))
        alert('There was an error saving answer. Try again.')
      })
  }
}


export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const {loggedUser} = getState()
    dispatch(showLoading())
    return saveQuestion({author: loggedUser, optionOneText, optionTwoText})
      .then((question) => {
        dispatch(addQuestion(question))
        dispatch(addUserQuestion(question))
      }).then(
        () => dispatch(hideLoading())
      )
  }
}
