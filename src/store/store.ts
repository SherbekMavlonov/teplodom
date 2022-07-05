import { configureStore } from '@reduxjs/toolkit'
import getNewProducts from './newProduct'

export const store = configureStore({
  reducer: {
    getNewProducts,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
