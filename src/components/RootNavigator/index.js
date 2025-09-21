import React from "react";

import { Stack } from "expo-router";
import AppWrapper from "../../AppWrapper"
// import Toast from "react-native-toast-message";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const RootNavigator = () => {
  const { top } = useSafeAreaInsets();

  return (
    <AppWrapper>
      <>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(entry)" />
          <Stack.Screen name="+not-found" />
        </Stack>
        {/* <Toast topOffset={top} /> */}
      </>
    </AppWrapper>
  );
};

export default RootNavigator;
