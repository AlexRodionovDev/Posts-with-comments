import { Post } from './typesPosts'
import {
  FetchPostsAction,
  FetchPostsSuccessAction,
  FetchPostsErrorAction,
  PostsActionTypes,
} from './typesPosts'

export const fetchPostsRequest = (): FetchPostsAction => ({
  type: PostsActionTypes.FETCH_POSTS_REQUEST,
})

export const fetchPostsSuccess = (posts: Post[]): FetchPostsSuccessAction => ({
  type: PostsActionTypes.FETCH_POSTS_SUCCESS,
  payload: posts,
})

export const fetchPostsError = (posts: Post[]): FetchPostsErrorAction => ({
  type: PostsActionTypes.FETCH_POSTS_ERROR,
  payload: 'Error',
})
