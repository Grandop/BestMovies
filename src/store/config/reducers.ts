import { combineReducers } from '@reduxjs/toolkit'
import { MoviesService } from '../services/movies'

const reducers = combineReducers({
  [MoviesService.reducerPath]: MoviesService.reducer
})

export { reducers }

export type RootState = ReturnType<typeof reducers>
