import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import Text from "../Text";
import colors from "../../../config/colors";

const Button = ({
  children,
  style,
  textStyle,
  loading,
  disabled,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: disabled
            ? colors.grey.normal.active
            : colors.white.normal.default,
        },
        style,
      ]}
      activeOpacity={0.8}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="small" color={colors.black.normal.default} />
      ) : (
        <Text
          weight="semibold"
          fontSize={14}
          style={[styles.text, textStyle]}
          color={
            disabled ? colors.white.normal.default :colors.black.normal.default
          }
        >
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
