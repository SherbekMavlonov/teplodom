import { configureStore } from '@reduxjs/toolkit'
import getNewProducts from './newProduct'
import category from './category'
import login from './login'

export const store = configureStore({
  reducer: {
    getNewProducts,
    category,
    login,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
