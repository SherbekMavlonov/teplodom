import { configureStore } from '@reduxjs/toolkit'
import getNewProducts from './newProduct'
import category from './category'
export const store = configureStore({
  reducer: {
    getNewProducts,
    category,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
