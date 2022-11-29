import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isUserLogedIn: false,
};
export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginStatus: (state, action) => {
      state.isUserLogedIn = action.payload;
    },
  },
});

export const {setUserLoginStatus } = UserSlice.actions

export default UserSlice.reducer