import React from "react";
import { Tabs } from "expo-router";
import CustomTabBar from "../../components/common/CustomTabBar";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          title: "Bookings",
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: "Message",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  );
}
