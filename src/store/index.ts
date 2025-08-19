import { configureStore } from '@reduxjs/toolkit'
import middleware from './config/middleware'
import { reducers } from './config/reducers'

const store = configureStore({
  reducer: reducers,
  middleware
})

export type AppDispatch = typeof store.dispatch

export { store }
