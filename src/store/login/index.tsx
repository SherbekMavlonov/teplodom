import { createSlice } from '@reduxjs/toolkit'
import { LoginState, IUser } from '../types'

const initialState: LoginState = {
  user: {} as IUser,
  error: '',
  isLogin: false,
  isLoading: false,
}

const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.clear()
      state.isLogin = false
      state.user = {} as IUser
    },
  },
})

export default LoginSlice.reducer

export const { logout } = LoginSlice.actions
