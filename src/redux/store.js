import { combineReducers } from "redux";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { thunk } from "redux-thunk";

import reactotron from "../ReactotronConfig";

import preferencesReducer from "./reducers/preferencesReducer";

const reducers = combineReducers({
  preferences: preferencesReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(__DEV__ ? [reactotron.createEnhancer()] : []),
});

export default store;
