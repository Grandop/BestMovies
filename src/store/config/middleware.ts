import { MoviesService } from '../services/movies'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (getDefaultMiddleware: any) => {
  const middleware = getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false
  }).concat(MoviesService.middleware)
  return middleware
}
