import { createSlice } from '@reduxjs/toolkit'
const appSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    material: [],
    featured: [],
  },
  reducers: {
    product: (state, action) => {
      state.products = action.payload
    },
    materialProduct: (state, action) => {
      state.material = action.payload
    },
    featuredProduct: (state, action) => {
      state.featured = action.payload
    },
  },
})
export const { product, materialProduct, featuredProduct } = appSlice.actions
export default appSlice.reducer
