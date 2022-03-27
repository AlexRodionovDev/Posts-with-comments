import {
  FetchPostsAction,
  FetchPostsSuccessAction,
  FetchPostsErrorAction,
  PostState,
  PostsActionTypes,
} from './typesPosts'

const initialState: PostState = {
  posts: [],
  error: null,
}

const userReducer = (
  state = initialState,
  action: FetchPostsAction | FetchPostsSuccessAction | FetchPostsErrorAction,
): PostState => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS_REQUEST:
      return { error: null, posts: [] }
    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return { error: null, posts: action.payload }
    case PostsActionTypes.FETCH_POSTS_ERROR:
      return { error: action.payload, posts: [] }
    default:
      return state
  }
}
export default userReducer
