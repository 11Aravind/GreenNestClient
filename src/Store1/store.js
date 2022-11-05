import { configureStore } from '@reduxjs/toolkit'
import productSlice from './Slices/productSlice'
import bannerSlice from './Slices/bannerSlice'
export const store = configureStore({
  reducer: {
    productdetails:productSlice,
    banner:bannerSlice,
  },
})
