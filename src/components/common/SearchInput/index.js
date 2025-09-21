import React from "react";
import { TextInput, View, Text } from "react-native";
import useLanguage from "../../../hooks/useLanguage";
import styles from "./styles";

const SearchInput = ({
  value,
  onChangeText,
  placeholder,
  style,
  textAlign,
  color = "white",
  ...props
}) => {
  const { isRTL } = useLanguage();
  const align = textAlign !== undefined ? textAlign : isRTL ? "right" : "left";
  return (
    <View style={{ marginBottom: 12 }}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        textAlign={align}
        style={[styles.search, { color: color }]}
        placeholderTextColor={color}
        {...props}
      />
    </View>
  );
};

export default SearchInput;
