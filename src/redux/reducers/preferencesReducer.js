import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "en",
  dir: "ltr",
};

export const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload;
    },
    setDir(state, action) {
      state.dir = action.payload;
    },
  },
});

export default preferencesSlice.reducer;
