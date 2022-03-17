import { UsersAction, UsersState, UsersActionTypes } from '../../types/usersTypes'

const initialState: UsersState = {
  users: [],
  error: null,
}

const userReducer = (state = initialState, action: UsersAction): UsersState => {
  switch (action.type) {
    case UsersActionTypes.FETCH_USERS:
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
