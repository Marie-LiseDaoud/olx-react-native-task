import React from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./styles";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "../../../config/colors";
import Icon from "../Icon";
import LanguageSwitcher from "../LanguageSwitcher";
import useLanguage from "../../../hooks/useLanguage";

const TabHeader = ({ title, route, removeBack = true, ...props }) => {
  const { flexDirection, isRTL } = useLanguage();
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: useSafeAreaInsets().top + 20,
          paddingBottom: 20,
          flexDirection,
        },
      ]}
    >
      <View style={{ flexDirection: "row" }}>
        {!removeBack && (
          <TouchableOpacity onPress={() => props.navigation?.goBack?.()}>
            <Icon
              lib="MC"
              name={isRTL ? "chevron-right" : "chevron-left"}
              size={30}
              color={colors.white.normal.default}
            />
          </TouchableOpacity>
        )}
      </View>

      <View style={[styles.right, { flexDirection }]}>
        <LanguageSwitcher />
        <Icon
          lib="OC"
          name="bell"
          size={24}
          color={colors.grey.light.default}
        />
      </View>
    </View>
  );
};

export default TabHeader;
