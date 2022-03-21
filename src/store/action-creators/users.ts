import axios from 'axios'
import { Dispatch } from 'react'
import { UsersAction, UsersActionTypes } from '../../types/usersTypes'

export default function fetchUsers() {
  return async (dispatch: Dispatch<UsersAction>) => {
    try {
      dispatch({ type: UsersActionTypes.FETCH_USERS })
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      dispatch({
        type: UsersActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      })
    } catch (e) {
      dispatch({
        type: UsersActionTypes.FETCH_USERS_ERROR,
        payload: 'An error occurred while uploading users',
      })
    }
  }
}
