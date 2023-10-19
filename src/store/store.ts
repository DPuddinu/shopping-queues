import { configureStore } from '@reduxjs/toolkit'
import queueReducer from '../features/queueSlice'

export const store = configureStore({
  reducer: {
    queues: queueReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch