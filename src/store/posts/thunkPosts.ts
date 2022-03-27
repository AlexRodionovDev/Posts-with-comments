import axios from 'axios'
import { Dispatch } from 'react'
import { fetchPostsRequest, fetchPostsSuccess, fetchPostsError } from './actionsPosts'
import { FetchPostsAction, FetchPostsSuccessAction, FetchPostsErrorAction } from './typesPosts'

export default function fetchComments(userId: string) {
  return async (
    dispatch: Dispatch<FetchPostsAction | FetchPostsSuccessAction | FetchPostsErrorAction>,
  ) => {
    try {
      dispatch(fetchPostsRequest())
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?${userId}`)
      dispatch(fetchPostsSuccess(response.data))
    } catch (e: any) {
      dispatch(fetchPostsError(e))
    }
  }
}
