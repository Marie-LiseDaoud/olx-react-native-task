import { preferencesSlice } from "../reducers/preferencesReducer";

export const setLanguage = ({ language, dir }) => {
  return async (dispatch) => {
    dispatch(preferencesSlice.actions.setLanguage(language));
    dispatch(preferencesSlice.actions.setDir(dir));
  };
};
