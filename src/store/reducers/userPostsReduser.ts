import { UserPostsAction, UserPostState, UserPostActionTypes } from '../../types/userPostsTypes'

const initialState: UserPostState = {
  userPosts: [],
  loading: false,
  error: null,
}

const userPostsReducer = (state = initialState, action: UserPostsAction): UserPostState => {
  switch (action.type) {
    case UserPostActionTypes.FETCH_USER_POSTS:
      return { loading: true, error: null, userPosts: [] }
    case UserPostActionTypes.FETCH_USER_POSTS_SUCCESS:
      return { loading: false, error: null, userPosts: action.payload }
    case UserPostActionTypes.FETCH_USER_POSTS_ERROR:
      return { loading: false, error: action.payload, userPosts: [] }
    default:
      return state
  }
}
export default userPostsReducer
