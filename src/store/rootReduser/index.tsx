import { combineReducers } from 'redux'
import commentsReducer from '../comments/reducerComments'
import userReducer from '../users/reduserUsers'
import userPostsReducer from '../posts/reduserPosts'

export const rootReducer = combineReducers({
  userReducer,
  commentsReducer,
  userPostsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
