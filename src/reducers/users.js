import {
  RECEIVE_USERS, ADD_USER_ANSWER, REMOVE_USER_ANSWER, ADD_USER_QUESTION
} from '../actions/users'


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
    case ADD_USER_QUESTION :
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([action.question.id])
        }
      }
    default :
      return state
  }
}
