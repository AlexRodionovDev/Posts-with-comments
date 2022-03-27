export interface CommentsState {
  comments: Comment[]
  error: null | string
}

export interface Comment {
  body: string
  email: string
  id: number
  name: string
  postId: number
}

export enum CommentsActionTypes {
  FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST',
  FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS',
  FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR',
}

export interface FetchCommentsRequestAction {
  type: CommentsActionTypes.FETCH_COMMENTS_REQUEST
}
export interface FetchCommentsSuccessAction {
  type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS
  payload: Comment[]
}
export interface FetchCommentsErrorAction {
  type: CommentsActionTypes.FETCH_COMMENTS_ERROR
  payload: string
}
