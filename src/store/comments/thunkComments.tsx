import axios from 'axios'
import { Dispatch } from 'react'
import { fetchCommentsRequest, fetchCommentsSuccess, fetchCommentsError } from './actionsComments'
import {
  FetchCommentsRequestAction,
  FetchCommentsSuccessAction,
  FetchCommentsErrorAction,
} from './typesComments'

interface Props {
  id: number
}

export default function fetchComments(id: Props) {
  return async (
    dispatch: Dispatch<
      FetchCommentsRequestAction | FetchCommentsSuccessAction | FetchCommentsErrorAction
    >,
  ) => {
    try {
      dispatch(fetchCommentsRequest())
      const response = await axios.get(`https://jsonplaceho lder.typicode.com/posts/${id}/comments`)
      dispatch(fetchCommentsSuccess(response.data))
    } catch (e: any) {
      dispatch(fetchCommentsError(e))
    }
  }
}
