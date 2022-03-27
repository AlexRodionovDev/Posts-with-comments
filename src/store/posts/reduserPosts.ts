import {
  FetchPostsAction,
  FetchPostsSuccessAction,
  FetchPostsErrorAction,
  PostState,
  PostsActionTypes,
} from './typesPosts'

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
}

const userReducer = (
  state = initialState,
  action: FetchPostsAction | FetchPostsSuccessAction | FetchPostsErrorAction,
): PostState => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS_REQUEST:
      return { loading: true, error: null, posts: [] }
    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return { loading: false, error: null, posts: action.payload }
    case PostsActionTypes.FETCH_POSTS_ERROR:
      return { loading: false, error: action.payload, posts: [] }
    default:
      return state
  }
}
export default userReducer

// import { UserPostsAction, UserPostState, UserPostActionTypes } from './typesPosts'

// const initialState: UserPostState = {
//   userPosts: [],
//   loading: false,
//   error: null,
// }

// const userPostsReducer = (state = initialState, action: UserPostsAction): UserPostState => {
//   switch (action.type) {
//     case UserPostActionTypes.FETCH_USER_POSTS:
//       return { loading: true, error: null, userPosts: [] }
//     case UserPostActionTypes.FETCH_USER_POSTS_SUCCESS:
//       return { loading: false, error: null, userPosts: action.payload }
//     case UserPostActionTypes.FETCH_USER_POSTS_ERROR:
//       return { loading: false, error: action.payload, userPosts: [] }
//     default:
//       return state
//   }
// }
// export default userPostsReducer
