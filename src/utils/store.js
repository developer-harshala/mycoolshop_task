import { configureStore } from '@reduxjs/toolkit'
import product, { featuredProduct, materialProduct } from './appSlice'

const store = configureStore({
  reducer: {
    products: product,
    materials: materialProduct,
    feature: featuredProduct,
  },
})
export default store
