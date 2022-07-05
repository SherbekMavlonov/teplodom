import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import instance from '../../hook/axios'
import { initialStateCategory, Category } from '../types'

const initialState: initialStateCategory = {
  error: '',
  category: [],
  loading: false,
}

export const getCategories = createAsyncThunk<Category[]>(
  'categories/getCategories',
  async (_, thunkApi) => {
    try {
      const data = await instance.get('all-category')
      return data.data
    } catch (err) {
      thunkApi.rejectWithValue(err)
    }
  }
)

export const createCategories = createAsyncThunk<Object, Category>(
  'categories/createCategories',
  async (data, thunkAPI) => {
    try {
      const res = await instance.post('/new-category', data)
      thunkAPI.dispatch(getCategories())
      return res.data
    } catch (err) {
      thunkAPI.rejectWithValue(err)
    }
  }
)

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
