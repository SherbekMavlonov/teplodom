import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import instance from '../../hook/axios'
import { initialStateCategory, Category } from '../types'

const initialState: initialStateCategory = {
  error: '',
  category: [],
  loading: false,
}

const getCategories = createAsyncThunk('get-categories', () => {
  return instance.get('all-category').then((data) => data.data)
})

const categorySlice = createSlice({
  name: 'Category',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCategories.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(
      getCategories.fulfilled,
      (state, action: PayloadAction<Category[]>) => {
        state.category = action.payload
      }
    )
    builder.addCase(getCategories.rejected, (state, action) => {
      state.error = action.error.message || 'Xatolik'
    })
  },
})

export default categorySlice.reducer
