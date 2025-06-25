import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    productList: [],
    productDetail: {},
  },
  reducers: {},
})

// Action creators are generated for each case reducer function
// export const { addProduct } = productSlice.actions

export default productSlice.reducer
