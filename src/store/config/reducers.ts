import { combineReducers } from '@reduxjs/toolkit'
import { MoviesService } from '../services/movies'

const reducers = combineReducers({
  // Services
  [MoviesService.reducerPath]: MoviesService.reducer
  // Slices
  // [AuthSlice.name]: AuthSlice.reducer,
})

export { reducers }

export type RootState = ReturnType<typeof reducers>
