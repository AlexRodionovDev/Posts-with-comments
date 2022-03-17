import axios from 'axios'
import { Dispatch } from 'react'
import { UserPostsAction, UserPostActionTypes } from '../../types/userPostsTypes'

export default function fetchUserPosts(userId: string) {
  return async (dispatch: Dispatch<UserPostsAction>) => {
    try {
      dispatch({ type: UserPostActionTypes.FETCH_USER_POSTS })
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts${userId}`)
      dispatch({
        type: UserPostActionTypes.FETCH_USER_POSTS_SUCCESS,
        payload: response.data,
      })
    } catch (e) {
      dispatch({
        type: UserPostActionTypes.FETCH_USER_POSTS_ERROR,
        payload: 'An error occurred when uploading users',
      })
    }
  }
}
