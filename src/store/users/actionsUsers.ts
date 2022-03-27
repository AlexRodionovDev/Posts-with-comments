import {
  User,
  FetchUsersRequestAction,
  FetchUsersSuccessAction,
  FetchUsersErrorAction,
  UsersActionTypes,
} from './typesUsers'

export const fetchUsersRequest = (): FetchUsersRequestAction => ({
  type: UsersActionTypes.FETCH_USERS_REQUEST,
})

export const fetchUsersSuccess = (user: User[]): FetchUsersSuccessAction => ({
  type: UsersActionTypes.FETCH_USERS_SUCCESS,
  payload: user,
})

export const fetchUsersError = (err: any): FetchUsersErrorAction => ({
  type: UsersActionTypes.FETCH_USERS_ERROR,
  payload: `${err.name} loading users!`,
})
