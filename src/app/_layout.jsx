import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import AppWrapper from "../AppWrapper";

export default function RootLayout() {
  return (
    <AppWrapper>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </AppWrapper>
  );
}
