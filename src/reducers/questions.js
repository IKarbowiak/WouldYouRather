import {RECEIVE_QUESTIONS, SAVE_ANSWER, REMOVE_ANSWER, ADD_QUESTION} from '../actions/questions'

export default function questions(state={}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS :
      return {...state, ...action.questions}
    case ADD_QUESTION :
      return {
        ...state,
        [action.question.id]: action.question
      }
    case SAVE_ANSWER :
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer]['votes'].concat([action.loggedUser])
          }
        }
      }
    case REMOVE_ANSWER :
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer]['votes']
              .filter(u => u !== action.loggedUser)
          }
        }
      }
    default :
      return state
  }
}
