export const SET_LOGGED_USER = 'SET_LOGGED_USER'
export const LOG_OUT = 'LOG_OUT'

export function setLoggedUser(id) {
  return {
    type: SET_LOGGED_USER,
    id
  }
}

export function logOut() {
  return {
    type: LOG_OUT,
  }
}
