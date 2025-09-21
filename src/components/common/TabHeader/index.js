import React, { use, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./styles";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "../../../config/colors";
import Icon from "../Icon";
import LanguageSwitcher from "../LanguageSwitcher";
import useLanguage from "../../../hooks/useLanguage";
import Text from "../Text";
import { useDispatch, useSelector } from "react-redux";
import { preferencesSlice } from "../../../redux/reducers/preferencesReducer";
import LocationModal from "../../LocationModal";

const TabHeader = ({ title, route, removeBack = true, ...props }) => {
  const { flexDirection, isRTL } = useLanguage();

  const [locationModalVisible, setLocationModalVisible] = useState(false);
  const dispatch = useDispatch();
  let { location } = useSelector((state) => state.preferences);
  if (!location) location = "Lebanon";

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
      {removeBack && (
        <TouchableOpacity
          onPress={() => setLocationModalVisible(true)}
          style={styles.location}
        >
          <Text
            style={{ fontWeight: "bold", color: colors.white.normal.default }}
          >
            {location}
          </Text>
          <Icon
            lib="EN"
            name="chevron-down"
            size={20}
            color={colors.orange.dark.default}
          />
        </TouchableOpacity>
      )}

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
      <LocationModal
        visible={locationModalVisible}
        onClose={() => setLocationModalVisible(false)}
        onSelect={(loc) => {
          dispatch(preferencesSlice.actions.setLocation(loc));
        }}
      />
    </View>
  );
};

export default TabHeader;
