import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { API_URL } from '@/constants/api'

export const baseQuery = fetchBaseQuery({
  baseUrl: API_URL
})
