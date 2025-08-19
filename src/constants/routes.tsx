export enum Routes {
  HOME = 'Home',
  MOVIE_DETAIL = 'MovieDetail'
}

export type RootStackParamList = {
  [Routes.HOME]: undefined
  [Routes.MOVIE_DETAIL]: { id: number }
}
