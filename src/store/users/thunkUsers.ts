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
    } catch (e: any) {
      dispatch(fetchUsersError())
    }
  }
}

// import axios from 'axios'
// import { Dispatch } from 'react'
// import { UsersAction, UsersActionTypes } from './usersTypes'

// export default function fetchUsers() {
//   return async (dispatch: Dispatch<UsersAction>) => {
//     try {
//       dispatch({ type: UsersActionTypes.FETCH_USERS })
//       const response = await axios.get('https://jsonplaceholder.typicode.com/users')
//       dispatch({
//         type: UsersActionTypes.FETCH_USERS_SUCCESS,
//         payload: response.data,
//       })
//     } catch (e) {
//       dispatch({
//         type: UsersActionTypes.FETCH_USERS_ERROR,
//         payload: 'An error occurred while uploading users',
//       })
//     }
//   }
// }
