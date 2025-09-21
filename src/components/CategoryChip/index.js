import React from "react";
import colors from "../../config/colors";
import useLanguage from "../../hooks/useLanguage";
import { TouchableOpacity } from "react-native";
import Text from "../common/Text";

const CategoryChip = ({ category, selectedCategory, onPress }) => {
  const { getLocalized } = useLanguage();

  return (
    <TouchableOpacity
      style={{
        padding: 10,
        marginRight: 8,
        borderRadius: 20,
        backgroundColor:
          selectedCategory === category.externalID
            ? colors.orange.dark.default
            : colors.grey.light.default,
      }}
      onPress={onPress}
    >
      <Text
        color={
          selectedCategory === category.externalID
            ? colors.white.normal.default
            : colors.black.normal.default
        }
      >
        {getLocalized(category, "name")}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryChip;
