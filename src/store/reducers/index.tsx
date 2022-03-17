import { combineReducers } from 'redux'
import commentsReducer from './commentsReducer'
import userReducer from './userReducer'
import userPostsReducer from './userPostsReduser'

export const rootReducer = combineReducers({
  userReducer,
  commentsReducer,
  userPostsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
