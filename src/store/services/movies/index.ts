import {
  MoviesDetailsParams,
  MoviesResponse,
  MoviesSearchParams
} from './types'
import { MoviesResults } from '@/entities/movies'
import { createApi } from '@reduxjs/toolkit/query/react'
import { API_KEY } from '@/constants/api'
import { baseQuery } from '@/store/config/baseQuery'

export const MoviesService = createApi({
  reducerPath: 'movies-service',
  baseQuery,
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesResponse, void>({
      query: () => ({
        url: `/trending/movie/week?api_key=${API_KEY}&language=pt-BR`,
        method: 'GET'
      })
    }),
    getMoviesById: builder.query<MoviesResults, MoviesDetailsParams>({
      query: ({ id }: MoviesDetailsParams) => ({
        url: `/movie/${id}?api_key=${API_KEY}&language=pt-BR`,
        method: 'GET'
      })
    }),
    searchMovies: builder.query<MoviesResponse, MoviesSearchParams>({
      query: ({ query }: MoviesSearchParams) => ({
        url: `/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}`,
        method: 'GET'
      })
    })
  })
})

export const {
  useGetMoviesQuery,
  useGetMoviesByIdQuery,
  useSearchMoviesQuery
} = MoviesService
