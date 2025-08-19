import { MoviesResults } from '@/entities/movies'

export type MoviesDetailsParams = {
  id: number
}

export type MoviesSearchParams = {
  query: string
}

export type MoviesResponse = {
  page: number
  results: MoviesResults[]
  total_pages: number
  total_results: number
}
