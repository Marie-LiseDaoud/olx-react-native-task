import React from "react";
import { Stack } from "expo-router";


const EntryLayout = () => {
  return (
    <Stack
      screenOptions={{
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />

    </Stack>
  );
};

export default EntryLayout;
