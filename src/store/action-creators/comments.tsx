import axios from 'axios'
import { Dispatch } from 'react'
import { CommentsAction, CommentsActionTypes } from '../../types/commentsTypes'

interface Props {
  id: number
}

export default function fetchComments(id: Props) {
  return async (dispatch: Dispatch<CommentsAction>) => {
    try {
      dispatch({ type: CommentsActionTypes.FETCH_COMMENTS })
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      dispatch({
        type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS,
        payload: response.data,
      })
    } catch (e) {
      dispatch({
        type: CommentsActionTypes.FETCH_COMMENTS_ERROR,
        payload: 'An error occurred while uploading comments',
      })
    }
  }
}
