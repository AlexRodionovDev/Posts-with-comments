export interface UserPostState {
  userPosts: any[]
  loading: boolean
  error: null | string
}
export enum UserPostActionTypes {
  FETCH_USER_POSTS = 'FETCH_USER_POSTS',
  FETCH_USER_POSTS_SUCCESS = 'FETCH_USER_POSTS_SUCCESS',
  FETCH_USER_POSTS_ERROR = 'FETCH_USER_POSTS_ERROR',
}
interface FetchUserPostsAction {
  type: UserPostActionTypes.FETCH_USER_POSTS
}
interface FetchUserPostsSuccessAction {
  type: UserPostActionTypes.FETCH_USER_POSTS_SUCCESS
  payload: any[]
}
interface FetchUserPostsErrorAction {
  type: UserPostActionTypes.FETCH_USER_POSTS_ERROR
  payload: string
}
export type UserPostsAction =
  | FetchUserPostsAction
  | FetchUserPostsSuccessAction
  | FetchUserPostsErrorAction
