export interface PostState {
  posts: Post[] //any убирает ошибку "setSelectedId(post.id)"
  loading: boolean
  error: null | string
}

export interface Post {
  body: string
  id: number
  title: string
  userId: number
}

export enum PostsActionTypes {
  FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST',
  FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
}
export interface FetchPostsAction {
  type: PostsActionTypes.FETCH_POSTS_REQUEST
}
export interface FetchPostsSuccessAction {
  type: PostsActionTypes.FETCH_POSTS_SUCCESS
  payload: Post[]
}
export interface FetchPostsErrorAction {
  type: PostsActionTypes.FETCH_POSTS_ERROR
  payload: string
}
