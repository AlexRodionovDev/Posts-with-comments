import {
  FetchCommentsRequestAction,
  FetchCommentsSuccessAction,
  FetchCommentsErrorAction,
  CommentsState,
  CommentsActionTypes,
} from './typesComments'

const initialState: CommentsState = {
  comments: [],
  loading: false,
  error: null,
}

const userReducer = (
  state = initialState,
  action: FetchCommentsRequestAction | FetchCommentsSuccessAction | FetchCommentsErrorAction,
): CommentsState => {
  switch (action.type) {
    case CommentsActionTypes.FETCH_COMMENTS_REQUEST:
      return { loading: true, error: null, comments: [] }
    case CommentsActionTypes.FETCH_COMMENTS_SUCCESS:
      return { loading: false, error: null, comments: action.payload }
    case CommentsActionTypes.FETCH_COMMENTS_ERROR:
      return { loading: false, error: action.payload, comments: [] }
    default:
      return state
  }
}
export default userReducer
