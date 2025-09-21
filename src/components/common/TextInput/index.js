import _ from "lodash";
import React, { useState } from "react";
import { View, TextInput as RNTextInput, TouchableOpacity } from "react-native";

import Text from "../Text";
import Icon from "../Icon";
import useLanguage from "../../../hooks/useLanguage";
import colors from "../../../config/colors";
import createStyles from "./styles";

const TextInput = ({
  label,
  leftElt,
  rightElt,
  leftIconProps = {},
  rightIconProps = {},
  rightEltOnPress,
  error,
  value,
  onBlur,
  style,
  containerStyle,
  inputStyle,
  onFocus,
  leftEltOnPress,
  editable = true,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const { isRTL, flexDirection } = useLanguage();
  const styles = createStyles(isFocused, !_.isEmpty(value), !_.isEmpty(error));

  return (
    <View style={[styles.wrapper, style]}>
      {label && (
        <Text fontSize={14} style={styles.label}>
          {label}
        </Text>
      )}
      <View style={[styles.container, { flexDirection }, containerStyle]}>
        {(leftElt || !_.isEmpty(leftIconProps)) && (
          <TouchableOpacity
            style={styles.eltWrapper}
            disabled={!leftEltOnPress}
            onPress={leftEltOnPress}
          >
            {leftElt ? leftElt : <Icon size={24} {...leftIconProps} />}
          </TouchableOpacity>
        )}
        <RNTextInput
          editable={editable}
          value={value}
          style={[
            styles.textInput,
            inputStyle,
            {
              color: editable ? colors.white.normal.default : colors.grey.normal.default,
            },
          ]}
          textAlign={isRTL ? "right" : "left"}
          placeholderTextColor={colors.grey.normal.default}
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          {...props}
        />
        {(rightElt || !_.isEmpty(rightIconProps)) && (
          <TouchableOpacity
            style={styles.eltWrapper}
            disabled={!rightEltOnPress}
            onPress={rightEltOnPress}
          >
            {rightElt ? rightElt : <Icon size={24} {...rightIconProps} />}
          </TouchableOpacity>
        )}
      </View>
      {!_.isEmpty(error) && (
        <Text fontSize={12} style={styles.err}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default TextInput;
