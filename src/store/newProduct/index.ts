import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import instance from '../../hook/axios'
import { Product, initialStateNewProduct } from '../types'

const initialState: initialStateNewProduct = {
  product: [],
  loading: false,
  error: '',
}

export const getProducts = createAsyncThunk('/new-products', () => {
  return instance.get('new-product').then((data) => data.data)
})

const getNewProducts = createSlice({
  name: 'newProduct',
  initialState,

  reducers: {},

  // Extra reducers

  extraReducers(builder) {
    // Loading
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true
    })

    // Fullfilled
    builder.addCase(
      getProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.error = ''
        state.loading = false
        state.product = action.payload
      }
    )

    // Error

    builder.addCase(getProducts.rejected, (state, action) => {
      state.error = action.error.message || 'Xatolik'
      state.loading = false
    })
  },
})

export default getNewProducts.reducer
