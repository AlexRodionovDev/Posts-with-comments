import {
  FetchUsersRequestAction,
  FetchUsersSuccessAction,
  FetchUsersErrorAction,
  UsersState,
  UsersActionTypes,
} from './typesUsers'

const initialState: UsersState = {
  users: [],
  error: null,
}

const userReducer = (
  state = initialState,
  action: FetchUsersRequestAction | FetchUsersSuccessAction | FetchUsersErrorAction,
): UsersState => {
  switch (action.type) {
    case UsersActionTypes.FETCH_USERS_REQUEST:
      return { error: null, users: [] }
    case UsersActionTypes.FETCH_USERS_SUCCESS:
      return { error: null, users: action.payload }
    case UsersActionTypes.FETCH_USERS_ERROR:
      return { error: action.payload, users: [] }
    default:
      return state
  }
}
export default userReducer
