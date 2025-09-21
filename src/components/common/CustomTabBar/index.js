import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./styles.js";
import Icon from "../Icon/index.js";
import colors from "../../../config/colors.js";

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();

  const icons = {
    home: { lib: "FA5", name: "home", label: "Home" },
    search: { lib: "FA5", name: "search", label: "Search" },
    message: { lib: "IO", name: "chatbox-ellipses", label: "Messages" },
    profile: { lib: "FA5", name: "user-alt", label: "Profile" },
  };

  return (
    <View
      style={{
        paddingBottom: insets.bottom,
        alignItems: "center",
        backgroundColor: colors.grey.dark.default,
      }}
    >
      <View style={[styles.tabBarContainer]}>
        {state?.routes?.map((route, index) => {
          const { options } = descriptors?.[route?.key];
          const isFocused = state?.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const color = isFocused
            ? colors.orange.normal.default
            : colors.gray?.normal?.default || "gray"; // fallback

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={styles.tabBarButton}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ["selected"] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
            >
              <Icon
                lib={icons[route.name]?.lib}
                name={icons[route.name]?.name}
                size={20}
                color={color}
              />
              <Text style={{ color, fontSize: 12 }}>
                {icons[route.name]?.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CustomTabBar;
