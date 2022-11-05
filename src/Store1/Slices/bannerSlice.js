// bannerSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bannerList:[],
  // bannerList:[{
  //   image:""
  // }],
  imagePath:"http://localhost/Greennest/api/User/images/",
}

export const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {
    fetchBannerDetails:(state,action)=>{
        // console.log(action.payload);
       state.bannerList=(action.payload);
       
   },
  },
})

// Action creators are generated for each case reducer function
export const {fetchBannerDetails } = bannerSlice.actions

export default bannerSlice.reducer