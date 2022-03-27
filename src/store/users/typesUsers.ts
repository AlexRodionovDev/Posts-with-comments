export interface UsersState {
  users: User[]
  error: null | string
}

export interface User {
  address: object
  company: object
  email: string
  id: number
  name: string
  phone: string
  username: string
  website: string
}

export enum UsersActionTypes {
  FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}
export interface FetchUsersRequestAction {
  type: UsersActionTypes.FETCH_USERS_REQUEST
}
export interface FetchUsersSuccessAction {
  type: UsersActionTypes.FETCH_USERS_SUCCESS
  payload: User[]
}
export interface FetchUsersErrorAction {
  type: UsersActionTypes.FETCH_USERS_ERROR
  payload: string
}
