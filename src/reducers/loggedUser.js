import {SET_LOGGED_USER, LOG_OUT} from '../actions/loggedUser'

export default function loggedUser(state=null, action) {
  switch (action.type) {
    case SET_LOGGED_USER :
      return action.id
    case LOG_OUT :
      return null
    default :
      return state
  }
}
