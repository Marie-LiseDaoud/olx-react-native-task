import "react-native-reanimated";

import { DefaultTheme, ThemeProvider } from "@react-navigation/native";

import store from "./redux/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./network/queryClient";
import { KeyboardProvider } from "react-native-keyboard-controller";

if (__DEV__) {
  require("./ReactotronConfig");
}

const RootLayout = ({ children }) => {
  const persistor = persistStore(store);
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider value={DefaultTheme}>
            <KeyboardProvider>{children}</KeyboardProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default RootLayout;
