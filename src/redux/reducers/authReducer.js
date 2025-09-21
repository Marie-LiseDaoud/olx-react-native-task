import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  accessToken: "",
  isExploring: false,
  authModalVisible: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = {};
    },

  },
});

export default authSlice.reducer;
