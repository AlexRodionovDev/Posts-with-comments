import axios from 'axios'
import { Dispatch } from 'react'
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersError } from './actionsUsers'
import {
  FetchUsersRequestAction,
  FetchUsersSuccessAction,
  FetchUsersErrorAction,
} from './typesUsers'

export default function fetchUsers() {
  return async (
    dispatch: Dispatch<FetchUsersRequestAction | FetchUsersSuccessAction | FetchUsersErrorAction>,
  ) => {
    try {
      dispatch(fetchUsersRequest())
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      dispatch(fetchUsersSuccess(response.data))
    } catch (err: any) {
      dispatch(fetchUsersError(err))
    }
  }
}
