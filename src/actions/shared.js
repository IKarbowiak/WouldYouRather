import {getInitialData} from '../utils/api'
import {receiveUsers} from './users'
import {receiveQuestions} from './questions'
import {setLoggedUser} from './loggedUser'
import {showLoading, hideLoading} from 'react-redux-loading'


export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData().then(({users, questions}) => {
    // todo: remove that after adding Router
      dispatch(setLoggedUser("johndoe"))
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
      dispatch(hideLoading())
    })
  }
}
