import { Comment } from './typesComments'
import {
  FetchCommentsRequestAction,
  FetchCommentsSuccessAction,
  FetchCommentsErrorAction,
  CommentsActionTypes,
} from './typesComments'

export const fetchCommentsRequest = (): FetchCommentsRequestAction => ({
  type: CommentsActionTypes.FETCH_COMMENTS_REQUEST,
})

export const fetchCommentsSuccess = (comments: Comment[]): FetchCommentsSuccessAction => ({
  type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS,
  payload: comments,
})

export const fetchCommentsError = (err: any): FetchCommentsErrorAction => ({
  type: CommentsActionTypes.FETCH_COMMENTS_ERROR,
  payload: `${err.name} loading comments!`,
})
