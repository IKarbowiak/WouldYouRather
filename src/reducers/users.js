import {RECEIVE_USERS, ADD_USER_ANSWER, REMOVE_USER_ANSWER} from '../actions/users'


export default function users(state={}, action) {
  switch (action.type) {
    case RECEIVE_USERS :
      return {...state, ...action.users}
    case ADD_USER_ANSWER :
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          answers: {
            ...state[action.id].answers,
            [action.qid]: action.answer
          }
        }
      }
    case REMOVE_USER_ANSWER :
      const {id, qid} = action
      const userAnswers = state[id].answers
      delete userAnswers[qid]
      return {
        ...state,
        [id]: {
          ...state[id],
          answers: {
            userAnswers
          }
        }
      }
    default :
      return state
  }
}
