import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'

import getNewProducts from './newProduct'

// const rootReducer = combineReducers({ getNewProducts })

const store = configureStore({
  reducer: {
    getNewProducts,
  },
  middleware: [thunkMiddleware],
})

export default store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
